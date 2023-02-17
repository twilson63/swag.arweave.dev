<script lang="ts">
  import { Route } from "tinro";
  import { setContext } from "svelte";
  import Leaderboard from "./leaderboard.svelte";
  import Player from "./player.svelte";
  import Lib from "./lib/index.js";
  import { register } from "./services/warp.js";

  // setBusinessLogic
  setContext("data", Lib.init({ register }));
  // setup hash router mode
  // router.mode.hash();
</script>

<Route path="/" let:meta>
  <div>{JSON.stringify(meta)}</div>
  {#if meta.query.id}
    <div>ID Route: {meta.query.id}</div>
  {:else if meta.query.tx}
    <Player />
  {:else}
    <Leaderboard />
  {/if}
</Route>
