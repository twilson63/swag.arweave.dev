import { action, createMachine, invoke, reduce, state, transition, immediate, guard } from "robot3";
import { propEq } from "ramda";

let players = [
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "rakis",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "rakis",
    bio: "Permaweb Developer",
    email: "",
    links: {
      twitter: "rakis_me",
      github: "rakis-me",
      discord: "tom-permapages#3217"
    },
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 10
  },
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "dmac",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "dmac",
    bio: "Permaweb Developer",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 11
  },
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "vince",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "vince",
    bio: "Permaweb Developer",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 12
  },
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "nickj",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "nickj",
    bio: "Permaweb Developer",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 13
  },
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "justin",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "jshaw",
    bio: "Permaweb Developer",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 14
  },
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "geoffrey",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "geoffrey",
    bio: "Permaweb Developer",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 15
  },
  {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "saif",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "mrsaif",
    bio: "Permaweb Developer",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    },
    stamps: {},
    qrcode: 16
  }
];

export default function ({ leaderboard, player, stamp, register }, wallet) {
  return createMachine({
    idle: state(
      transition(
        "id",
        "loading",
        reduce((ctx, ev) => {
          console.log("app data", ev);
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
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const results = await leaderboard().catch((e) => {
          console.log(e);
          return [];
        });
        console.log("results", results);
        return players;
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
        "getPlayer",
        guard((ctx) => ctx.tx)
      ),
      transition("show", "getPlayer"),
      transition("register", "register")
    ),
    // getPlayer: invoke((_, ev) => player(ev.id),
    getPlayer: invoke(
      (ctx, ev) => {
        const player = ctx.players.find(propEq("qrcode", ev.id));
        return player ? Promise.resolve(player) : Promise.reject(null);
        //return ctx.players[0]
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
    stamping: invoke(async (ctx) => {
      await wallet.connect();
      await new Promise((resolve) => setTimeout(resolve, 2500));
      //return await stamp(ctx.player.id);
      return;
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
