<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import modalAction from "./modal-action";
  import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";
  import { take, takeLast } from "ramda";
  import StampIcon from "./svgs/stamp.svelte";
  import stamp from "../assets/stamp.svg";
  import profile from "../assets/profile.svg";

  // show player with QR Code for stamping
  export let current;
  export let player;

  const dispatch = createEventDispatcher();

  $: open = current === "viewPlayer";
</script>

<input type="checkbox" id="player" bind:checked={open} class="modal-toggle" />

<div class="modal" use:modalAction>
  <div class="m-wrapper" transition:fly={{ y: 200, duration: 300 }}>
    <div class="m-container">
      <div class="m-body-container">
        <div class="pc-wrapper">
          <div class="pc-u-container">
            <p>{`@${player.handle}`}</p>
          </div>
          <div class="pc-a-container">
            <img src={`https://arweave.net/${player.avatar}`} alt={"Avatar"} />
          </div>
          <div class="pc-b-container">
            <p>{player.bio}</p>
          </div>
          <div class="pc-s-container">
            <!-- <img src={stamp} alt={"Stamp Icon"} /> -->
            <div class="mt-2 mr-2">
              <StampIcon />
            </div>
            <p class="font-roboto-mono font-bold">{`+${player.stamps.length}`}</p>
          </div>
          <div class="pc-sl-container-l-wrapper">
            <div class="p-container">
              {#each player.stamps as stamp}
                <div class="p-row">
                  <div class="p-info">
                    <img src={profile} alt={"Profile Icon"} />
                    <p class="font-roboto-mono font-bold">
                      {take(5, stamp.address)}...{takeLast(5, stamp.address)}
                    </p>
                  </div>
                  <div class="p-ts">
                    <div class="p-ts-flex">
                      <p class="font-roboto-mono font-bold">Been Stamped</p>
                      <div class="p-time">
                        <p class="font-roboto-mono font-bold text-[18px] text-[#222326]">
                          {`${formatDistanceToNowStrict(fromUnixTime(stamp.timestamp))} ago`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="m-action-container">
        <button
          class="mb-wrapper"
          on:click|stopPropagation={() => {
            if (location.search) {
              location.search = "";
            }
            open = false;
            dispatch("close");
          }}
        >
          <div class="mb-label-wrapper">
            <span class="mb-label font-roboto-mono font-bold">Go To Leaderboard</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .p-container {
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 40px 20px 0 20px;
  }
  .p-row {
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #222326;
    border-radius: 11px;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }
  .p-info {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
  }
  .p-info img {
    width: 30px;
    margin: 0 10px 0 0;
  }
  .p-info p {
    color: #222326;
    font-size: 12px;
  }
  .p-ts {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: end;
  }
  .p-ts-flex {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .p-ts-flex p {
    color: #222326;
    font-size: 14px;
    text-align: right;
  }
  .p-time p {
    font-size: 16px;
    font-weight: 700;
  }
</style>
