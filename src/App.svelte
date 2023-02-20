<script lang="ts">
  import { Route } from "tinro";
  import { setContext } from "svelte";
  import Leaderboard from "./leaderboard.svelte";
  import Player from "./player.svelte";
  import Lib from "./lib/index.js";
  import { register } from "./services/warp.js";
  import { dispatch, get, query } from "./services/ar-utils.js";
  import { stamp, count, filter } from "./services/stamp-utils.js";
  import { ArweaveWebWallet } from "arweave-wallet-connector";

  const wallet = new ArweaveWebWallet({
    // Initialize the wallet as soon as possible to get instant auto reconnect
    name: "Swag Game",
    logo: "https://swag.arweave.dev/arweave.svg",
  });

  wallet.setUrl("arweave.app");

  // setWallet Data
  setContext("wallet", wallet);

  // setBusinessLogic
  setContext(
    "data",
    Lib.init({
      query,
      get,
      dispatch,
      register,
      stamp,
      count,
      filter,
    })
  );
  // setup hash router mode
  // router.mode.hash();
</script>

<Route path="/" let:meta>
  {#if meta.query.id}
    <div>ID Route: {meta.query.id}</div>
  {:else if meta.query.tx}
    <Player />
  {:else}
    <Leaderboard />
  {/if}
</Route>
