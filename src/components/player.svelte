<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  // import profileIcon from "../assets/profile.svg";
  // import hoodieIcon from "../assets/hoodie-icon.svg";
  // import continueIcon from "../assets/continue.svg";
  //import stamp from "../assets/stamp.svg";
  import StampIcon from "./svgs/stamp.svelte";
  import profile from "../assets/profile.svg";
  import modalAction from "./modal-action";

  export let current;
  export let player;
  const dispatch = createEventDispatcher();

  $: open = current === "player";
  let slicedStampList = player.stamps.slice(0, 7);
</script>

<input type="checkbox" id="player" bind:checked={open} class="modal-toggle" />

<div class="modal" use:modalAction>
  <div class="m-wrapper" transition:fly={{ y: 200, duration: 300 }}>
    <div class="m-container">
      <div class="m-body-container">
        <div class="pc-wrapper">
          <p class="pc-header">
            {"You've Scanned"}
          </p>
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
            {#if player.stamps.length > 0}
              <div class="info-flex">
                <p class="font-poppins">Stamped by</p>
                <span class="font-poppins"
                  >{`(${player.stamps.length}) Player${player.stamps.length > 1 ? "s" : ""}`}</span
                >
              </div>
              <div class="pc-sl-container-p-flex">
                <div class="pc-sl-container-pl">
                  {#each slicedStampList as element}
                    <img src={profile} alt={"Avatar"} />
                  {/each}
                </div>
                <div class="pc-sl-container-e">
                  {#if player.stamps.length > 7}
                    <span>+{player.stamps.length - slicedStampList.length}</span>
                  {/if}
                </div>
              </div>
            {:else}
              <div class="pc-empty-wrapper">
                <p>Be the first to stamp this player</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div class="m-action-container">
        {#if player.admin}
          <button class="mb-wrapper" on:click|stopPropagation={() => dispatch("reset")}>
            <div class="mb-label-wrapper">
              <span class="mb-label font-roboto-mono font-bold">Reset</span>
            </div>
          </button>
        {/if}
        <button class="mb-wrapper" on:click|stopPropagation={() => dispatch("stamp")}>
          <div class="mb-label-wrapper">
            <div class={"mi-wrapper mi-icon-start"}>
              <!-- <img src={stamp} alt={"Stamp Icon"} /> -->
              <StampIcon />
            </div>
            <span class="mb-label font-roboto-mono font-bold">Stamp</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>
