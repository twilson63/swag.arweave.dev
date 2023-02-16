<script lang="ts">
  import { Route, router } from "tinro";
  import { setContext } from "svelte";
  import Leaderboard from "./leaderboard.svelte";
  import Lib from "./lib/index.js";

  // setBusinessLogic
  setContext("data", Lib.init({}));
  // setup hash router mode
  router.mode.hash();
</script>

<Route path="/">
  <Leaderboard />
</Route>
