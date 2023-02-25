<script>
  import { fly } from "svelte/transition";
  import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import stampIcon from "../assets/stamp.svg";
  import continueIcon from "../assets/continue.svg";
  export let current;
  export let hoodie;

  $: open = current === "hoodie";

  let completed = false;
</script>

<input type="checkbox" id="hoodie" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 2000 }}>
    <div class="pc-wrapper">
      <img class="h-16 w-16" src={profileIcon} alt="stamper" />
      <p class="uppercase font-roboto-mono-700 text-white text-2xl mb-12">YOU</p>
      <div
        class="border-[#5AFF7F] border-2 py-2 px-4 rounded-full bg-primary text-white font-roboto-mono-700 text-2xl"
      >
        🎉 {hoodie.stamps > 3 ? 3 : hoodie.stamps} / 3
      </div>
      {#if hoodie.stamps >= 3}
        <div class="mt-4 flex relative w-full items-center justify-center">
          <!-- <img class="absolute" style="left: 10px;" src={hoodieIcon} alt="hoodie" /> -->
          <div class="bg-[#515359] w-4/5 border-0 rounded-16 py-8 px-8">
            <h3 class="text-white font-roboto-mono-700 text-2xl">HOODIE UNLOCKED!</h3>
            <p class="ml-8">Find us @ FwdResearch <br />booth to claim your hoodie.</p>
          </div>
        </div>
      {:else}
        <div class="mt-4 flex relative w-full items-center justify-center">
          <img class="absolute" style="left: 10px;" src={hoodieIcon} alt="hoodie" />
          <div class="bg-[#515359] w-4/5 border-0 rounded-16 py-8 px-8">
            <p class="ml-8 text-right">
              Stamp {3 - hoodie.stamps} more Hoodies <br />to unlock your <br />Arweave Stamper
              hoodie
            </p>
          </div>
        </div>
      {/if}
    </div>
    <div class="modal-actions">
      <button on:click class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono">
        GO TO LEADERBOARD
        <img class="ml-2" src={continueIcon} alt="continue" />
      </button>
    </div>
  </div>
</div>
