<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import continueIcon from "../assets/continue.svg";
  import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";
  import { take, takeLast } from "ramda";

  // show player with QR Code for stamping
  export let current;
  export let player;

  const dispatch = createEventDispatcher();

  $: open = current === "viewPlayer";
</script>

<input type="checkbox" id="player" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 300 }}>
    <div class="pc-wrapper relative">
      <p class="pc-header uppercase font-robo-mono-700">Player</p>
      <img
        class="h-16 w-16 mb-4 mask mask-circle"
        src={"https://arweave.net/" + player.avatar}
        alt={"Avatar"}
      />
      <div class="absolute top-16 right-8">
        <div class="mb-2">Stamps</div>
        <div
          class="flex items-center justify-center pl-[6px] w-[68px] h-[30px] bg-[#515359] rounded-[23px]"
        >
          <!-- <img src={stampIcon} alt="stamp-icon" class="pt-[2px] mr-[6px] h-[16px]" /> -->
          <div class="text-[18px] text-white">
            +{player.stamps.length}
          </div>
        </div>
      </div>
      <div class="pc-u-container font-robo-mono-500 text-[17.74px]">
        <p>{`@${player.handle}`}</p>
      </div>
      <div class="pc-b-container">
        {player.bio}
      </div>
      <div class="overflow-x-hidden overflow-scroll h-[300px] w-full">
        {#each player.stamps as stamp}
          <div class="flex items-center justify-start space-x-4 w-full mb-4 ml-8">
            <div
              class="flex items-center justify-center bg-secondary rounded-full h-16 w-16 text-xl text-white"
            >
              {take(2, stamp.address)}
            </div>
            <div class="w-1/3 text-left pl-4">
              {take(5, stamp.address)}...{takeLast(5, stamp.address)}
            </div>
            <div class="w-1/3">{formatDistanceToNowStrict(fromUnixTime(stamp.timestamp))}</div>
          </div>
        {/each}
      </div>
    </div>
    <div class="modal-actions">
      <button
        on:click|stopPropagation={() => {
          if (location.search) {
            location.search = "";
          }
          dispatch("close");
        }}
        class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono text-xl"
      >
        GO TO LEADERBOARD
        <img class="ml-2" src={continueIcon} alt="continue" />
      </button>
    </div>
  </div>
</div>
