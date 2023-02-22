<script>
  export let completed;
  export let username;
  export let avatar;
  export let bio;
  export let stampList;

  let slicedStampList = stampList.slice(0, 7);
</script>

<div class="pc-wrapper">
  <p class="pc-header">
    {completed ? "Stamped Successfully!" : "You've Scanned"}
  </p>
  <div class="pc-u-container">
    <p>{username}</p>
  </div>
  <div class="pc-a-container">
    <img src={avatar} alt={"Avatar"} />
  </div>
  <div class="pc-b-container">
    <p>{bio}</p>
  </div>
  <div class="pc-sl-container">
    {#if stampList.length > 0}
      <span>Stamped by</span>
      <div class="pc-sl-container-l-wrapper">
        <div class="pc-sl-container-l">
          {#each slicedStampList as element}
            <img src={element.avatarURL} alt={"Avatar"} />
          {/each}
        </div>
        <div class="pc-sl-container-e">
          {#if stampList.length > 10}
            <span>+{stampList.length - slicedStampList.length}</span>
          {/if}
        </div>
      </div>
    {:else}
      <div class="pc-empty-wrapper">
        <p>Be the first to stamp this player</p>
      </div>
    {/if}
  </div>
</div>
