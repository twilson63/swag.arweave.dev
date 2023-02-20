<script lang="ts">
  import { getContext } from "svelte";
  import { user } from "./store.js";

  const { profile } = getContext("data");
  const wallet = getContext("wallet");

  async function loadArprofile() {
    // @ts-ignore
    await wallet.connect();
    // @ts-ignore
    $user.profile = await profile(wallet.address);
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
        <button class="btn">Register</button>
      </div>
    {:else}
      <form>
        <div class="form-control">
          <label class="label"
            >Avatar
            <input type="file" class="input input-bordered" />
          </label>
        </div>
        <div class="form-control">
          <label class="label"
            >Username
            <input type="input" class="input input-bordered" />
          </label>
        </div>
        <div class="form-control">
          <label class="label"
            >Bio
            <textarea type="input" class="textarea textarea-bordered" />
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
