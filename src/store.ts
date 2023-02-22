// Svelte Stores
import { writable } from "svelte/store";
import createMachine from "./machine.js";
import { useMachine } from "svelte-robot-factory";

import { ArweaveWebWallet } from "arweave-wallet-connector";

import Lib from "./lib/index.js";
import {
  deployContract,
  getState,
  register,
  writeAction,
} from "./services/warp.js";
import { dispatch, get, query, toArrayBuffer } from "./services/ar-utils.js";
import { count, filter, stamp } from "./services/stamp-utils.js";

const wallet = new ArweaveWebWallet({
  // Initialize the wallet as soon as possible to get instant auto reconnect
  name: "Swag Game",
  logo: "https://swag.arweave.dev/arweave.svg",
});

wallet.setUrl("arweave.app");

const lib = Lib.init({
  query,
  get,
  dispatch,
  register,
  stamp,
  count,
  filter,
  deployContract,
  writeAction,
  toArrayBuffer,
  getState,
});

// const machine = createMachine({
//   loading: invoke(leaderboard,
//     transition('done', 'leaderboard',
//       reduce((ctx, ev) => ({ ...ctx, players: ev.data }))
//     )
//   ),
//   leaderboard: state(
//     transition('show', 'player'),
//     transition('register', 'register')
//   ),
//   player: state(
//     transition('stamp', 'stamp'),
//     transition('reset', 'admin')
//   ),
//   // send('stamp', 'PLAYER_TX_ID') // 2nd arg is the data prop in event
//   stamp: invoke((_, ev) => stamp(ev.data),
//     transition('done', 'stampResult',
//       reduce((ctx, ev) => set(lensPath(['player', 'count']), ev.data, ctx))
//     ),
//     transition('error', 'stampError')
//   ),
//   stampResult: state(
//     transition('close', 'leaderboard')
//   ),
//   stampError: state(
//     transition('close', 'leaderboard')
//   ),
//   register: state(
//     transition('createPlayer', 'playerConfirmation'),
//     transition('cancel', 'leaderboard')
//   ),
//   playerConfirmation: state(
//     transition('close', 'leaderboard')
//   )

// }, context)
const machine = createMachine(lib, wallet)
export const robot = useMachine(machine, {});

interface User {
  profile?: {
    id?: string;
    address: string;
    handle: string;
    avatar: string;
    bio: string;
  };
}
export const user = writable({} as User);
