<script lang="ts">
  import { Route } from "tinro";

  import Leaderboard from "./components/organisms/leaderboard.svelte";
  import Player from "./components/organisms/player.svelte";
  import Splash from "./components/atoms/splash.svelte";

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
