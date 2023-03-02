<script>
  import { ArweaveWebWallet } from "arweave-wallet-connector";
  import { createEventDispatcher, onMount } from "svelte";
  import PixelsAnimatingOne from "./svgs/pixels-animating-1.svelte";
  import PixelsAnimatingTwo from "./svgs/pixels-animating-2.svelte";

  import profileIcon from "../assets/profile.svg";

  const dispatch = createEventDispatcher();
  let files = [];
  onMount(async (e) => {
    const wallet = new ArweaveWebWallet({
      name: "SWAG STAMPER"
    });
    wallet.setUrl("arweave.app");
    await wallet.connect().catch((e) => console.log(e));
    dispatch("register", e);
  });
</script>

<form class="m-0 p-0" on:submit|preventDefault>
  <div class="hero min-h-screen bg-neutral relative">
    <div class="hero-content flex-col items-center justify-start pb-10">
      <div class="pixels moving">
        <PixelsAnimatingOne />
      </div>
      <div class="pixels-two moving-delay">
        <PixelsAnimatingTwo />
      </div>
      <h3 class="mt-32 text-[25px] font-roboto-mono font-bold text-white uppercase">
        Join the game
      </h3>
      <div class="flex flex-col items-center">
        <div>
          {#if files[0]}
            <img
              class="h-[102px] w-[102px] object-contain"
              src={URL.createObjectURL(files[0])}
              alt="avatar"
            />
          {:else}
            <img class="h-[102px] w-[102px]" src={profileIcon} alt="avatar" />
          {/if}
        </div>
        <div class="mt-4 mb-8 form-control">
          <label class="underline text-white font-work-sans-400"
            >set profile pic
            <input
              bind:files
              name="avatar"
              type="file"
              class="hidden"
              accept="image/png, image/jpeg, image/gif, image/jpg, image/webp, image/svg+xml"
            />
          </label>
        </div>
        <div class="mb-4 form-control">
          <input
            name="handle"
            placeholder="enter username..."
            class="font-work-sans-400 input rounded-md bg-white text-black min-w-[280px] h-[60px]"
            required
          />
        </div>
        <div class="form-control">
          <textarea
            name="bio"
            rows="3"
            placeholder="enter bio..."
            class="font-work-sans-400 textarea w-[250px] bg-white text-black min-w-[280px]"
            required
          />
        </div>
      </div>
      <button
        class="btn btn-block btn-secondary text-white font-roboto-mono font-medium h-[60px] text-[20px] rounded-md"
        >JOIN</button
      >
    </div>
  </div>
</form>

<style>
  @keyframes animating {
    0% {
      transform: scale(1);
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
    50% {
      transform: translate(10px, 50px) scale(1.5) rotate(-0.1turn);
      opacity: 25%;
    }
    75% {
      opacity: 50%;
    }
    100% {
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
  }
  @keyframes animatingTwo {
    0% {
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
    50% {
      transform: translate(10px, 200px) scale(0.25) rotate(0.1turn);
      opacity: 25%;
    }
    75% {
      opacity: 50%;
    }
    100% {
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
  }
  .pixels {
    position: absolute;
    z-index: -50;
  }
  .pixels-two {
    position: absolute;
    z-index: -100;
  }
  .moving {
    animation: animating infinite 20s linear;
  }
  .moving-delay {
    animation: animatingTwo infinite 30s linear;
  }
</style>
