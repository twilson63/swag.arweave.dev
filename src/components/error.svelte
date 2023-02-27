<script>
  import { createEventDispatcher } from "svelte";
  export let error;

  const dispatch = createEventDispatcher();
  function handleClick() {
    //location.search = "";
    dispatch("click");
  }
</script>

<div class="hero min-h-screen bg-base-100">
  <div class="hero-contain space-y-32">
    <h3 class="text-3xl uppercase font-roboto-mono-700 font-bold text-white">{error.title}</h3>
    <p>{error.message}</p>
    <div>
      <button
        class="btn btn-secondary font-roboto-mono-700 font-bold btn-block"
        on:click={handleClick}>Try Again</button
      >
    </div>
  </div>
</div>
