<script lang="ts">
  import { Route } from "tinro";
  import Leaderboard from "./leaderboard.svelte";
  import Player from "./player.svelte";
  import Splash from "./splash.svelte";

  import { setContext } from "svelte";
  import Lib from "./lib/index.js";
  import { register } from "./services/warp.js";
  import { dispatch, get, query } from "./services/ar-utils.js";
  import { stamp, count } from "./services/stamp-utils.js";

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

<Route path="/splash">
  <Splash />
</Route>
