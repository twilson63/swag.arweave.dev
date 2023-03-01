import { createMachine, invoke, reduce, state, transition, immediate, guard } from "robot3";
import { propEq, over, lensProp, assoc, map, lens, identity, find, compose, __, prop } from "ramda";

export default function (
  { leaderboard, uploadAvatar, playerStamps, stamp, register, userStamps, reset },
  wallet
) {
  return createMachine({
    idle: state(
      transition(
        "id",
        "loading",
        reduce((ctx, ev) => {
          return { ...ctx, code: ev.id };
        })
      ),
      transition(
        "tx",
        "loading",
        reduce((ctx, ev) => {
          return { ...ctx, tx: ev.tx };
        })
      ),
      transition("load", "loading")
    ),
    // loading: invoke(leaderboard,
    loading: invoke(
      async () => {
        //await new Promise((resolve) => setTimeout(resolve, 3000));

        return await leaderboard();
      },
      transition(
        "done",
        "leaderboard",
        reduce((ctx, ev) => ({ ...ctx, players: ev.data }))
      ),
      transition("error", "leaderboard")
    ),
    leaderboard: state(
      immediate(
        "getPlayer",
        guard((ctx) => ctx.code)
      ),
      immediate(
        "loadPlayer",
        guard((ctx) => ctx.tx)
      ),
      transition(
        "show",
        "loadPlayer",
        reduce((ctx, ev) => ({ ...ctx, player: ctx.players.find(propEq("code", ev.code)) }))
      ),
      transition("register", "register")
    ),
    loadPlayer: invoke(
      async (ctx) => {
        let player;
        if (ctx.tx) {
          player = ctx.players.find(propEq("token", ctx.tx));
        } else {
          player = ctx.player;
        }
        player.stamps = await playerStamps(ctx.tx ? ctx.tx : ctx.player.token);
        return player;
      },
      transition(
        "done",
        "viewPlayer",
        reduce((ctx, ev) => {
          return over(lensProp("player"), () => ev.data, ctx);
        })
      )
    ),
    viewPlayer: state(transition("close", "leaderboard")),
    // getPlayer: invoke((_, ev) => player(ev.id),
    getPlayer: invoke(
      async (ctx) => {
        const player = ctx.players.find(propEq("code", ctx.code));
        const stamps = await playerStamps(player.token).then(attachPlayersToStamps(ctx.players));

        return player ? Promise.resolve({ ...player, stamps }) : Promise.reject(null);
      },
      transition(
        "done",
        "player",
        reduce((ctx, ev) => {
          return { ...ctx, player: ev.data };
        })
      ),
      transition("error", "register")
    ),
    player: state(
      transition("stamp", "stamping"),
      transition("reset", "resetPlayer"),
      transition("close", "leaderboard")
    ),
    stamping: invoke(
      async (ctx) => {
        if (!window["arweaveWallet"]) {
          await wallet.connect();
          await new Promise((resolve) => setTimeout(resolve, 500));
        }

        return await stamp(ctx.player.token); //.then((result) => ((location.search = ""), result));
      },
      transition("done", "confirmation"),
      transition(
        "error",
        "error",
        reduce((ctx) => {
          return {
            ...ctx,
            error: {
              title: "Already Stamped!",
              message: "Looks like you have already stamped this player."
            }
          };
        })
      )
    ),
    confirmation: state(transition("continue", "getHoodie"), transition("skip", "loading")),
    getHoodie: invoke(
      async (ctx) => {
        const address = await window.arweaveWallet.getActiveAddress();
        const stamps = await userStamps(
          address,
          ctx.players.map((p) => p.token)
        ).then(
          map(
            over(
              lens(identity, assoc("player")),
              compose(compose(find(__, ctx.players), propEq("token")), prop("asset"))
            )
          )
        );

        return { stamps: stamps, players: ctx.players.length };
      },

      transition(
        "done",
        "hoodie",
        reduce((ctx, ev) => {
          return { ...ctx, hoodie: ev.data };
        })
      )
    ),
    hoodie: state(transition("close", "loading")),
    register: state(transition("continue", "form")),
    form: state(transition("register", "submitting")),
    submitting: invoke(
      async (ctx, ev) => {
        //await wallet.connect().catch(e)
        const address = await window.arweaveWallet.getActiveAddress();
        const avatar = await uploadAvatar(ev.file, ev.file.type);
        const result = await register({
          code: ev.code,
          address: address,
          handle: ev.handle,
          bio: ev.bio,
          avatar: avatar.id
        });

        location.search = "";
        // reset to leaderboard
        return result;
      },
      transition("done", "leaderboard"),
      transition(
        "error",
        "error",
        reduce((ctx, ev) => {
          let msg = ev.error.message;
          if (ev.error.message === "Rejected") {
            msg = "User cancelled Registration";
          }
          return {
            ...ctx,
            error: { title: "Error", message: msg }
          };
        })
      )
    ),
    errorStamp: state(transition("continue", "leaderboard")),
    error: state(transition("continue", "form")),
    resetPlayer: invoke(async (ctx) => {
      if (!window["arweaveWallet"]) {
        await wallet.connect();
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      return await reset(ctx.player.code);
    }, transition("done", "loading"))
  });
}

function attachPlayersToStamps(players) {
  return map(
    over(
      lens(identity, assoc("player")),
      compose(compose(find(__, players), propEq("address")), prop("address"))
    )
  );
}
