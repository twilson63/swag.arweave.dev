import { action, createMachine, invoke, reduce, state, transition, immediate, guard } from "robot3";

export default function ({ leaderboard, player, stamp, register }, wallet) {
  return createMachine({
    idle: state(
      transition(
        "id",
        "loading",
        reduce((ctx, ev) => {
          console.log("data", ev);
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
      () =>
        Promise.resolve([
          {
            id: "XFvaK9uJOBzU55sx3MG5aBeDNs8x1PIeOkN8PQY4atc",
            handle: "rakis",
            address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
            bio: "developer",
            avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
            collected: [],
            given: []
          }
        ]),
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
        "getPlayer",
        guard((ctx) => ctx.tx)
      ),
      transition("show", "getPlayer"),
      transition("register", "register")
    ),
    // getPlayer: invoke((_, ev) => player(ev.id),
    getPlayer: invoke(
      (_, ev) =>
        Promise.resolve({
          id: "XFvaK9uJOBzU55sx3MG5aBeDNs8x1PIeOkN8PQY4atc",
          handle: "rakis",
          address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
          bio: "developer",
          avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
          collected: [],
          given: []
        }),
      transition(
        "done",
        "player",
        reduce((ctx, ev) => ({ ...ctx, player: ev.data }))
      ),
      transition(
        "error",
        "player",
        reduce((ctx, ev) => {
          console.log(ev);
        })
      )
    ),
    player: state(
      transition("stamp", "stamping"),
      transition("reset", "resetPlayer"),
      transition("close", "leaderboard")
    ),
    stamping: invoke(async (ctx) => {
      await wallet.connect();
      return await stamp(ctx.player.id);
    }, transition("done", "confirmation")),
    confirmation: state(transition("close", "leaderboard")),
    register: state(transition("continue", "form")),
    form: state(transition("register", "submitting")),
    submitting: invoke(async (ctx, ev) => {
      await wallet.connect();
      return await register(ev.data);
    }, transition("done", "leaderboard")),
    resetPlayer: state()
  });
}
