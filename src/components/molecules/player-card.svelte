<script>
  import { stamp } from "../../lib/stamp";

  export let completed;
  export let username;
  export let avatar;
  export let bio;
  export let stampList;

  let slicedStampList = stampList.slice(0, 10);
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
      <span> Stamped by </span>
      <div class="pc-sl-container-l-wrapper">
        <div class="pc-sl-container-l">
          {#each slicedStampList as element}
            <img src={element.avatarURL} alt={"Avatar"} />
          {/each}
        </div>
        <div class="pc-sl-container-e">
          <span>+{stampList.length - slicedStampList.length}</span>
        </div>
      </div>
    {:else}
      <div class="pc-empty-wrapper">
        <p>Be the first to stamp this player</p>
    </div>
    {/if}
  </div>
</div>

<style>
  .pc-wrapper {
    min-height: 400px;
    height: 100%;
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pc-header {
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 40px 0 15px 0;
  }
  .pc-u-container {
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f3f4;
    margin: 0 0 20px 0;
  }
  .pc-u-container p {
    color: #222326;
    font-size: 16px;
    font-weight: 500;
  }
  .pc-a-container {
    height: 100px;
    width: 100px;
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
  .pc-a-container img {
    width: 100%;
  }
  .pc-b-container {
    width: 100%;
    text-align: center;
    margin: 15px 0;
    padding: 0 20px;
  }
  .pc-b-container p {
    color: rgba(242, 243, 244, 0.6);
    font-size: 14px;
  }
  .pc-sl-container {
    height: 80px;
    width: 100%;
    padding: 0 20px;
  }
  .pc-sl-container span {
    color: #ffffff;
    font-size: 14px;
    line-height: 25px;
  }
  .pc-sl-container-l-wrapper {
    height: calc(100% - 25px);
    width: 100%;
    padding: 5px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  .pc-sl-container-l {
    height: 100%;
    width: calc(100% - 70px);
    display: flex;
    overflow: hidden;
  }
  .pc-sl-container-l *:not(:first-child) {
    margin: 0 0 0 -7.5px;
  }
  .pc-sl-container-l img {
    height: 32.5px;
    width: 32.5px;
    border-radius: 50%;
    border: 2px solid #222326;
  }
  .pc-sl-container-e {
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
  }
  .pc-sl-container-e span {
    color: #ffffff;
    font-size: 24px;
    line-height: initial;
    font-weight: 600;
  }
  .pc-empty-wrapper {
    text-align: center;
  }
  .pc-empty-wrapper p {
    color: #ffffff;
    font-size: 14px;
  }
</style>
