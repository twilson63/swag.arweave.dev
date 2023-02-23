<script>
  import { onMount, onDestroy } from "svelte";
  let ref;
  let portal;

  onMount(() => {
    portal = document.createElement("div");
    portal.className = "portal";
    document.body.appendChild(portal);
    portal.appendChild(ref);
  });

  onDestroy(() => {
    document.body.removeChild(portal);
  });
</script>

<div class="portal">
  <div bind:this={ref}>
    <slot />
  </div>
</div>

<style>
  .portal {
    height: 100vh;
    width: 100%;
    position: relative;
    background: #f2f3f4;
  }
</style>
