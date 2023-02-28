<script>
  import { fly } from "svelte/transition";

  import checked from "../assets/check.svg";
  // import profileIcon from "../assets/profile.svg";
  // import hoodieIcon from "../assets/hoodie-icon.svg";
  // import stampIcon from "../assets/stamp.svg";
  import continueIcon from "../assets/continue.svg";
  export let current;
  export let player;
  import modalAction from "./modal-action";

  $: open = current === "confirmation" || current === "leaderboard";
  //let completed = false;
</script>

<input type="checkbox" id="confirmation" bind:checked={open} class="modal-toggle" />

<div class="modal" use:modalAction>
  <div class="m-wrapper" transition:fly={{ y: 200, duration: 300 }}>
    <div class="m-container">
      <div class="m-body-container">
        <div class="pc-wrapper">
          <div class="info-flex" style="justify-content: center; margin: 40px 0 20px 0;">
            <p class="pc-header" style="margin: 0 20px 0 0;">
              {"Stamp Success!"}
            </p>
            <img src={checked} alt="checkmark" />
          </div>
          <div class="pc-u-container" style="margin: 0 0 20px 0;">
            <p>{`@${player.handle}`}</p>
          </div>
          <div class="pc-a-container">
            <img src={`https://arweave.net/${player.avatar}`} alt={"Avatar"} />
          </div>
          <div class="pc-b-container">
            <p>{player.bio}</p>
          </div>
          <div class="pc-sl-container-p">
            <div class="center-message">
              <p>{`Stamp Hoodie #${player.code}`}</p>
            </div>
            <div class="center-message">
              <p style="margin: 20px 0 0 0; color: #5AFF7F">Stamped!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="m-action-container">
        <button class="mb-wrapper" on:click>
          <div class="mb-label-wrapper">
            <span class="mb-label font-roboto-mono font-bold">Continue</span>
            <div class={"mi-wrapper mi-icon-end"}>
              <img src={continueIcon} alt={"Continue Icon"} />
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>
