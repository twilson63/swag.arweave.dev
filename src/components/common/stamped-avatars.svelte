<script>
  import { take } from "ramda";
  import profile from "../../assets/profile.svg";
  export let stamps = [];
  export let amount = 7; //amount to show

  let slicedStamps = take(7, stamps);
</script>

<div class="info-flex">
  <p class="font-poppins">Stamped by</p>
  <span class="font-poppins">{`(${stamps.length}) Player${stamps.length > 1 ? "s" : ""}`}</span>
</div>
<div class="pc-sl-container-p-flex">
  <div class="pc-sl-container-pl">
    {#each slicedStamps as el}
      {#if el.player}
        <img src="https://arweave.net/{el.player.avatar}" alt={el.player.handle} />
      {:else}
        <img src={profile} alt="avatar" />
      {/if}
    {/each}
  </div>
  <div class="pc-sl-container-e">
    {#if stamps.length > amount}
      <span>+{stamps.length - amount}</span>
    {/if}
  </div>
</div>
