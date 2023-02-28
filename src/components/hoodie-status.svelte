<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import modalAction from "./modal-action";
  import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import stampIcon from "../assets/stamp.svg";
  import completedIcon from "../assets/completed.svg";

  export let current;
  export let hoodie;

  const dispatch = createEventDispatcher();

  $: open = current === "hoodie";

  //let completed = false;
  function handleClick() {
    location.search = "";
    dispatch("click");
  }
  let completed = hoodie.stamps.length >= 3;
</script>

<input type="checkbox" id="hoodie" bind:checked={open} class="modal-toggle" />

<div class="modal" use:modalAction>
  <div class="m-wrapper" transition:fly={{ y: 200, duration: 300 }}>
    <div class="m-container">
      <div class="m-body-container">
        <div class="psc-wrapper">
          <div class="psc-header">
            <img src={profileIcon} alt="Profile Icon" />
            <p>You</p>
          </div>
          <div class="pc-sl-container">
            <div class="psc-u-flex">
              <span>Stamped</span>
              <img src={stampIcon} alt="Stamp Icon" />
            </div>
            <div class="pc-sl-container-l-wrapper">
              <div class="pc-sl-container-l">
                {#each hoodie.stamps as element}
                  <img src={element.avatarURL} alt={"Avatar"} />
                {/each}
              </div>
              <div class={`psc-sl-container-e ${completed ? "psc-sl-container-e-completed" : ""}`}>
                <div class="psc-c-container">
                  <span class="psc-span-active"
                    >{completed ? "🎉" : "+"} {hoodie.stamps.length}</span
                  >
                  &nbsp;
                  <span class="psc-span-inactive">/ 3</span>
                </div>
              </div>
            </div>
          </div>
          <div class="psc-d-container">
            <div class="psc-d-status-container">
              <img src={hoodieIcon} alt="Hoodie Icon" />
              <div class="psd-d-status">
                <div class="psd-d-status-content">
                  <div>
                    <p class="psd-d-status-content-header">
                      {completed ? `Hoodie Unlocked !` : `Unlock Hoodie !`}
                    </p>
                    <p>
                      {completed
                        ? `Find us @ FwdResearch booth to claim your hoodie.`
                        : `Give 3 stamps and get your own stamp game hoodie.`}
                    </p>
                  </div>
                  <div class="psd-d-status-bar">
                    <div
                      class={`psd-d-status-bar-current ${
                        completed ? `psd-d-status-bar-completed` : ""
                      }`}
                      style={`width: ${((hoodie.stamps.length / 3) * 100).toString()}%`}
                    >
                      {#if completed}
                        <img src={completedIcon} alt="Completed Icon" />
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-action-container">
        <button class="mb-wrapper" on:click={handleClick}>
          <div class="mb-label-wrapper">
            <span class="mb-label font-roboto-mono font-bold">Go To Leaderboard</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .psc-wrapper {
    min-height: 425px;
    height: 100%;
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .psc-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 0 15px 0;
  }
  .psc-header img {
    width: 50px;
    margin: 0 0 10px 0;
  }
  .psc-header p {
    color: #ffffff;
    font-size: clamp(18px, 2.25vw, 25px);
    font-weight: 700;
    text-transform: uppercase;
  }
  .psc-u-flex {
    display: flex;
  }
  .psc-u-flex img {
    width: 12.5px;
    margin: 2.5px 0 0 10px;
  }
  .psc-sl-container-e {
    height: 45.5px;
    width: 110px;
    display: flex;
    margin: -21.5px 0 0 0;
    justify-content: center;
    background: #515359;
    border-radius: 125px;
  }
  .psc-sl-container-e-completed {
    border: 2.5px solid #5aff7f;
    border-radius: 125px;
  }
  .psc-c-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .psc-c-container span {
    color: white;
    font-size: 20px;
    font-weight: 700;
  }
  .psc-span-active {
    font-size: 22px !important;
  }
  .psc-span-inactive {
    color: #bfbfc0 !important;
  }
  .psc-d-container {
    height: calc(100% - 80px);
    width: 100%;
    padding: 0 25px;
  }
  .psc-d-status-container {
    min-height: 190px;
    height: calc(100% - 40px);
    width: 100%;
    display: flex;
    padding: 20px 0 10px 0;
    position: relative;
  }
  .psc-d-status-container img {
    height: calc(100% - 35px);
    position: absolute;
    z-index: 1;
  }
  .psd-d-status {
    height: calc(100% - 50.5px);
    width: 90.5%;
    position: absolute;
    right: 0;
    bottom: 26.5px;
    padding: 20px;
    border-radius: 11px;
  }
  .psd-d-status-content {
    height: 100%;
    width: 100%;
    padding: 0 0 0 30.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .psd-d-status-content-header {
    color: #ffffff !important;
    font-size: clamp(14px, 2vw, 18px) !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    margin: 0 0 5px 0;
  }
  .psd-d-status-content p {
    color: #bfbfc0;
    font-size: clamp(13px, 1vw, 16px);
    font-weight: 500;
  }
  .psd-d-status-bar {
    height: 20px;
    width: 100%;
    background: #383838;
    border-radius: 125px;
    margin: 5px 0 0 0;
  }
  .psd-d-status-bar-current {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 125px;
  }
  .psd-d-status-bar-completed {
    background: #5aff7f;
  }
  .psd-d-status-bar-completed img {
    width: 12.5px;
  }
  .psc-d-remaining-container {
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  @media (max-width: 540px) {
    .psc-d-status-container img {
      max-height: 20.5vh;
    }
    .psd-d-status {
      max-width: 66.5vw;
    }
  }
</style>
