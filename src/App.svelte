<script lang="ts">
  import { Route } from "tinro";
  import { setContext } from "svelte";
  import Leaderboard from "./leaderboard.svelte";
  import Player from "./player.svelte";
  import Lib from "./lib/index.js";
  import get from "./services/get.js";

  // setBusinessLogic
  setContext("data", Lib.init({ get }));
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
