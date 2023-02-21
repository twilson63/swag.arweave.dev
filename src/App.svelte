<script lang="ts">
  import { Route } from "tinro";

  import Leaderboard from "./components/organisms/leaderboard.svelte";
  import Player from "./components/organisms/player.svelte";
  import Splash from "./components/atoms/splash.svelte";

  import { setContext } from "svelte";
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
    <Player />
  {:else if meta.query.tx}
    <div>Tx: {meta.query.tx}</div>
  {:else}
    <Leaderboard />
  {/if}
</Route>

<Route path="/splash">
  <Splash />
</Route>
