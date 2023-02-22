<script lang="ts">
  import { Route } from "tinro";
  import Leaderboard from "./leaderboard.svelte";
  import Splash from "./splash.svelte";

  import { setContext } from "svelte";
  import { ArweaveWebWallet } from "arweave-wallet-connector";

  const wallet = new ArweaveWebWallet({
    // Initialize the wallet as soon as possible to get instant auto reconnect
    name: "Swag Game",
    logo: "https://swag.arweave.dev/arweave.svg",
  });

  wallet.setUrl("arweave.app");
  setContext("wallet", wallet);

  // setup hash router mode
  // router.mode.hash();
</script>

<Route path="/" let:meta>
  <Leaderboard tx={meta.query.tx} qr={meta.query.id} />
</Route>

<Route path="/splash">
  <Splash />
</Route>
