<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import QRCode from "./qrjs.svelte";
  import continueIcon from "../assets/continue.svg";

  // show player with QR Code for stamping
  export let current;
  export let player;

  const dispatch = createEventDispatcher();

  $: open = current === "viewPlayer";
</script>

<input type="checkbox" id="player" bind:checked={open} class="modal-toggle" />
<div class="modal">
  <div class="modal-box mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 2000 }}>
    <div class="pc-wrapper">
      <p class="pc-header uppercase font-robo-mono-700">STAMP ME</p>
      <img
        class="h-16 w-16 mb-4 mask mask-circle"
        src={"https://arweave.net/" + player.avatar}
        alt={"Avatar"}
      />
      <div class="pc-u-container font-robo-mono-500 text-[17.74px]">
        <p>{`@${player.handle}`}</p>
      </div>
      <QRCode codeValue="https://swag.arweave.dev/?id={player.code}" squareSize={400} />
      <div class="pc-b-container">
        {player.bio}
      </div>
    </div>
    <div class="modal-actions">
      <button
        on:click|stopPropagation={() => dispatch("close")}
        class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono text-xl"
      >
        GO TO LEADERBOARD
        <img class="ml-2" src={continueIcon} alt="continue" />
      </button>
    </div>
  </div>
</div>
