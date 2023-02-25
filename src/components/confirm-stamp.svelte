<script>
  import { fly } from "svelte/transition";
  import checked from "../assets/check.svg";
  import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import stampIcon from "../assets/stamp.svg";
  import continueIcon from "../assets/continue.svg";
  export let current;
  export let player;
  $: open = current === "confirmation" || current === "leaderboard";
  let completed = false;
</script>

<input type="checkbox" id="confirmation" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 2000 }}>
    <div class="pc-wrapper">
      <div class="pc-sl-container">
        <div class="pt-8 flex items-center justify-center">
          <h3 class="text-2xl font-robo-mono-700 text-white">STAMP SUCCESS!</h3>
          <img class="ml-2 h-6 w-6" src={checked} alt="checkmark" />
        </div>
        <div class="pc-sl-container-l-wrapper">
          <!-- <div class="pc-sl-container-l">
            {#each player.stamps as element}
              <img src={profileIcon} alt={"Avatar"} />
            {/each}
          </div> -->
        </div>
      </div>
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
      <button on:click class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono">
        CONTINUE
        <img class="ml-2" src={continueIcon} alt="continue" />
      </button>
    </div>
  </div>
</div>
