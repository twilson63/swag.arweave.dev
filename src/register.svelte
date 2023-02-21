<script lang="ts">
  import { getContext } from "svelte";
  import { user } from "./store.js";

  import type {
    Player,
    Profile,
    Register,
    UploadAvatar,
    CreateProfile,
  } from "./lib/index.js";

  export let code: string;

  const data: {
    profile: Profile;
    uploadAvatar: UploadAvatar;
    createProfile: CreateProfile;
    register: Register;
  } = getContext("data");
  const wallet: { address: string } = getContext("wallet");
  let files: FileList, handle: string, bio: string;

  async function loadArprofile() {
    // @ts-ignore
    await wallet.connect();
    // @ts-ignore
    $user.profile = await data.profile(wallet.address);
  }

  async function submitRegistration() {
    if (!$user.profile) {
      // access form data
      // convert avatar to under 100kb
      // upload avatar
      const avatar = await data.uploadAvatar(files[0], files[0].type);
      $user.profile = {
        handle,
        bio,
        avatar: avatar.id,
        address: wallet.address,
      };
      // create ar profile tx
      const { id } = await data.createProfile($user.profile);
      $user.profile.id = id;
    }
    const result = await data.register({
      profileTxId: $user.profile.id,
      address: wallet.address,
      handle: $user.profile.handle,
      avatar: $user.profile.avatar,
      code,
    });
    if (result) {
      alert("successfully registered as player");
    }
  }
</script>

<div class="hero min-h-screen">
  <div class="hero-content flex-col">
    <div>
      <h1 class="text-3xl">Register</h1>
    </div>
    {#if $user.profile}
      <div>
        <img
          alt="avatar"
          src={`https://arweave.net/${$user.profile.avatar}`}
          class="h-16 w-16 mask mask-circle"
        />
      </div>
      <div>
        <h3 class="text-2xl">{$user.profile.handle}</h3>
        <p>{$user.profile.bio}</p>
      </div>
      <div>
        <button class="btn" on:click={submitRegistration}>Register</button>
      </div>
    {:else}
      <form>
        <div class="form-control">
          <label class="label"
            >Avatar
            <input type="file" bind:files class="input input-bordered" />
          </label>
        </div>
        <div class="form-control">
          <label class="label"
            >Username
            <input
              type="input"
              class="input input-bordered"
              bind:value={handle}
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label"
            >Bio
            <textarea class="textarea textarea-bordered" bind:value={bio} />
          </label>
        </div>
        <div>
          <button class="btn">Register</button>
          <button type="button" class="btn" on:click={loadArprofile}
            >Use existing ArProfile</button
          >
        </div>
      </form>
    {/if}
  </div>
</div>
