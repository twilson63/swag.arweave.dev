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

const machine = createMachine(lib, wallet);
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
