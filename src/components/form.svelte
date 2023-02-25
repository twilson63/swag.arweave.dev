<script>
  import { ArweaveWebWallet } from "arweave-wallet-connector";
  import { createEventDispatcher, onMount } from "svelte";

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
  <div class="hero min-h-screen bg-base-100 relative">
    <div class="hero-content flex-col">
      <h3 class="text-[25px] pb-16 font-robo-mono-700 uppercase">Join the game</h3>
      <div class="flex flex-col space-y-8 items-center">
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
        <div class="form-control">
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
        <div class="form-control">
          <input
            name="handle"
            placeholder="enter username..."
            class="font-work-sans-400 input rounded-full bg-white color-black"
            required
          />
        </div>
        <div class="form-control">
          <textarea
            name="bio"
            rows="3"
            placeholder="enter bio..."
            class="font-work-sans-400 textarea rounded-50% w-[250px] bg-white color-black"
            required
          />
        </div>
      </div>
    </div>
    <button
      class="absolute bottom-0 btn btn-block rounded-none btn-secondary text-white font-robo-mono-500 text-[20px]"
      >JOIN</button
    >
  </div>
</form>
