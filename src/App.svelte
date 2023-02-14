<script lang="ts">
  import { Route, router } from "tinro";

  // setup hash router mode
  router.mode.hash();
</script>

<Route path="/">
  <div class="hero min-h-screen">
    <div class="hero-content">
      <h1 class="text-6xl">SWAG Game</h1>
    </div>
  </div>
</Route>
