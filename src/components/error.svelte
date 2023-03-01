<script>
  import { createEventDispatcher } from "svelte";
  export let error;

  const dispatch = createEventDispatcher();
  function handleClick() {
    //location.search = "";
    dispatch("click");
  }
</script>

<div class="hero min-h-screen bg-neutral relative">
  <div class="hero-contain space-y-4">
    <h3 class="text-3xl uppercase font-roboto-mono font-bold text-white">{error.title}</h3>
    <p>{error.message}</p>
  </div>

  <button
    class="absolute bottom-0 btn btn-block rounded-none btn-secondary text-white font-roboto-mono font-medium h-[60px] text-[20px]"
    on:click={handleClick}>Try Again</button
  >
</div>
