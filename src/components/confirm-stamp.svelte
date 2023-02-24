<script>
  import { fly } from "svelte/transition";
  import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import continueIcon from "../assets/continue.svg";
  export let current;
  export let player;
  $: open = current === "confirmation";
</script>

<input type="checkbox" id="confirmation" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 2000 }}>
    {#if current === "confirmation"}
      <div class="pc-wrapper">
        <p class="pc-header uppercase font-robo-mono-700">You've STAMPED!</p>
        <div class="pc-u-container">
          <p>{`Stamp Hoodie #${player.code}`}</p>
        </div>
        <div class="pc-a-container">
          <img src={"https://arweave.net/" + player.avatar} alt={"Avatar"} />
        </div>
        <div>
          <h3 class="text-2xl">{player.handle}</h3>
          <p>{player.bio}</p>
        </div>
        <div class="w-full">
          <div class="bg-white rounded-none text-2xl my-8 w-full py-4 px-8 text-secondary">
            STAMPED!
          </div>
        </div>
      </div>
      <div class="modal-actions">
        <button
          on:click
          class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono"
        >
          CONTINUE
        </button>
      </div>
    {/if}
  </div>
</div>
