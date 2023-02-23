<script lang="ts">
  import { Route } from "tinro";
  import Leaderboard from "./leaderboard.svelte";
  // import Leaderboard from "./components/organisms/leaderboard.svelte";
  // import Player from "./components/organisms/player.svelte";
  // import Splash from "./components/atoms/splash.svelte";

  // setup hash router mode
  // router.mode.hash();
</script>

<Route path="/" let:meta>
  <Leaderboard tx={meta.query.tx} id={meta.query.id} />
</Route>

<Route path="/splash">
  <Splash />
</Route>
