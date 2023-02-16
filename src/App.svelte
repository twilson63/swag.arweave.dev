<script lang="ts">
  import { Route, router } from "tinro";

  import Leaderboard from "./leaderboard.svelte";

  // setup hash router mode
  router.mode.hash();
</script>

<Route path="/">
  <Leaderboard />
</Route>
