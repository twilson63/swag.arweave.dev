<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import continueIcon from "../assets/continue.svg";
  import stampIcon from "../assets/stamp.svg";

  export let current;
  export let player;
  const dispatch = createEventDispatcher();

  $: open = current === "player";
</script>

<input type="checkbox" id="player" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 2000 }}>
    {#if current === "player"}
      <div class="pc-wrapper">
        <p class="pc-header uppercase font-robo-mono-700">You've Scanned</p>
        <div class="pc-u-container font-robo-mono-500 text-[17.74px]">
          <p>{`@${player.handle}`}</p>
        </div>
        <div class="pc-a-container">
          <img src={"https://arweave.net/" + player.avatar} alt={"Avatar"} />
        </div>
        <div class="pc-b-container">
          {player.bio}
        </div>
        <div class="mt-8 flex justify-between items-center space-x-[30px]">
          {#if player.stamps.length > 0}
            <span class="uppercase text-2xl text-white">Stamped by</span>
            <div class="pc-sl-container-e">
              <span>({player.stamps.length})</span>
            </div>
            <span class="uppercase text-2xl text-white">Stampers</span>
          {:else}
            <div class="pc-empty-wrapper">
              <p>Be the first to stamp this player</p>
            </div>
          {/if}
        </div>
      </div>
      <div class="modal-actions">
        <button
          on:click|stopPropagation={() => dispatch("stamp")}
          class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono text-xl"
        >
          <img class="mr-2" src={stampIcon} alt="continue" />
          STAMP
        </button>
      </div>
    {/if}
  </div>
</div>
