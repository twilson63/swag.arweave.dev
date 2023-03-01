<script>
  import { fly } from "svelte/transition";
  //import profileIcon from "../assets/profile.svg";
  import hoodieIcon from "../assets/hoodie-icon.svg";
  import continueIcon from "../assets/continue.svg";
  import modalAction from "./modal-action";

  export let current;
  export let id;
  $: open = current === "register";
</script>

<input type="checkbox" id="register" bind:checked={open} class="modal-toggle" />
<div class="modal" use:modalAction>
  <div class="modal-box bg-neutral mx-0 px-0 pb-0 mb-0" transition:fly={{ y: 200, duration: 300 }}>
    {#if current === "register"}
      <div class="flex flex-col">
        <div class="text-white uppercase text-[25px] font-roboto-mono font-bold ">
          You've Scanned
        </div>
        <div class="w-full bg-[#f2f3f4] text-neutral py-2 my-2 text-[18px]">
          <p>{`Stamp Hoodie #${id}`}</p>
        </div>
      </div>
      <div class="mt-8 mb-16 flex items-center justify-center w-full h-full">
        <img src={hoodieIcon} alt={"Avatar"} />
      </div>
      <div class="modal-actions">
        <button
          on:click
          class="btn btn-block btn-secondary rounded-none text-white font-roboto-mono h-[60px]"
        >
          Continue
          <img class="ml-2" src={continueIcon} alt="continue" />
        </button>
      </div>
    {/if}
  </div>
</div>
