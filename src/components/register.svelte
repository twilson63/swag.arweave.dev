<script>
  import { fly } from "svelte/transition";
  import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import continueIcon from "../assets/continue.svg";
  export let current;
  export let id;
  $: open = current === "register";
</script>

<input type="checkbox" id="register" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 2000 }}>
    {#if current === "register"}
      <div class="pc-wrapper">
        <p class="pc-header uppercase font-robo-mono-700">You've Scanned</p>
        <div class="pc-u-container">
          <p>{`Stamp Hoodie #${id}`}</p>
        </div>
        <div class="pc-a-container">
          <img src={hoodieIcon} alt={"Avatar"} />
        </div>
      </div>
      <div class="modal-actions">
        <button
          on:click
          class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono"
        >
          Continue
          <img class="ml-2" src={continueIcon} alt="continue" />
        </button>
      </div>
    {/if}
  </div>
</div>
