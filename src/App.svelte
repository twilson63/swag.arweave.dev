<script lang="ts">
  import { Route } from "tinro";
  import Leaderboard from "./leaderboard.svelte";
  import Splash from "./splash.svelte";

  // setup hash router mode
  // router.mode.hash();
</script>

<Route path="/" let:meta>
  <Leaderboard tx={meta.query.tx} qr={meta.query.id} />
</Route>

<Route path="/splash">
  <Splash />
</Route>
