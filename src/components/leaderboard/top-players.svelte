<script>
  import LeaderboardStampCounter from "./stamp-button.svelte";
  import { createEventDispatcher } from "svelte";
  import profileIcon from "../../assets/profile.svg";
  const dispatch = createEventDispatcher();
  export let players = [];

  function truncatePubkey(pubkey) {
    return pubkey.slice(0, 7) + ".." + pubkey.slice(-3);
  }

  function show(code) {
    dispatch("show", { code });
  }
</script>

<div class="top-players">
  <div class="top-players-header">
    <h1 class="font-roboto-mono-700 font-bold uppercase">LEADERBOARD</h1>
    <p>Stamps Collected</p>
  </div>
  <div class="top-players-avatars">
    <div class="top-players-avatar">
      <div class="top-players-avatar-placement">
        {2}
      </div>
      {#if players[1]}
        <img src={"https://arweave.net/" + players[1].avatar} alt="avatar" />
        <div class="top-players-label">
          <div class="top-players-label-name font-work-sans-700 font-bold">
            {players[1].handle}
          </div>
          <div class="top-players-label-pubkey">
            {truncatePubkey(players[1].address)}
          </div>
          <LeaderboardStampCounter count={players[1].collected} on:click={show(players[1].code)} />
        </div>
      {:else}
        <img src={profileIcon} alt="avatar" />
        <div class="top-players-label">
          <div class="top-players-label-name font-work-sans-700 font-bold">
            {"Unknown"}
          </div>
          <div class="top-players-label-pubkey">
            {truncatePubkey("XXXXXX")}
          </div>
          <LeaderboardStampCounter count={0} />
        </div>
      {/if}
    </div>
    <div class="top-players-avatar-mid">
      <div class="top-players-avatar-placement-mid">
        <svg
          width="40"
          height="38"
          viewBox="0 0 40 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4268 29.2161L10.6139 29.52L10.9621 29.4418L35.1736 24.0028L35.515 23.9262L35.5599 23.5792L36.9568 12.7846C37.0622 12.7738 37.1676 12.7567 37.2723 12.7332C38.6831 12.4163 39.5842 11.0231 39.2668 9.61052C38.9504 8.20182 37.5431 7.32312 36.1283 7.64095C34.7174 7.95789 33.8164 9.35104 34.1337 10.7636C34.221 11.1523 34.3917 11.4997 34.6217 11.7928L33.132 13.6886C33.1319 13.6887 33.1319 13.6887 33.1319 13.6887C32.541 14.4401 31.9935 14.9285 31.5194 15.1966C31.0479 15.4632 30.6881 15.4926 30.4229 15.408C30.1564 15.3229 29.8756 15.0875 29.6372 14.5947C29.398 14.1002 29.223 13.3864 29.1589 12.4398C29.1589 12.4397 29.1589 12.4397 29.1589 12.4396L29.0405 10.6811C30.4183 10.3397 31.2907 8.96531 30.9777 7.57197C30.6612 6.16327 29.254 5.28458 27.8391 5.6024C26.4283 5.91935 25.5272 7.31249 25.8445 8.72509C25.9892 9.36922 26.364 9.90288 26.8608 10.2609L26.6684 10.7913C26.2601 11.8388 25.8402 12.5103 25.4464 12.8962C25.0644 13.2705 24.7367 13.3524 24.453 13.3055C24.1393 13.2537 23.7617 13.0258 23.3452 12.5421C22.9341 12.0646 22.5248 11.3828 22.1418 10.523L22.1419 10.523L22.1381 10.5149L19.6061 5.09224C20.2238 4.48138 20.5286 3.57921 20.3235 2.66614C20.007 1.25745 18.5997 0.378751 17.1849 0.69658C15.7741 1.01352 14.873 2.40666 15.1903 3.81926C15.417 4.8283 16.2011 5.56204 17.1438 5.78442L17.0685 8.99408L17.0684 8.99408L17.0684 9.00039C17.0651 9.30521 17.0662 9.62671 17.0674 9.95936C17.0695 10.5684 17.0719 11.2148 17.0472 11.8648C17.0092 12.8678 16.9078 13.7902 16.6695 14.4571C16.4314 15.1233 16.1212 15.3839 15.7295 15.4032C15.2446 15.4271 14.4217 15.1147 13.1187 14.0072C13.1183 14.0068 13.1179 14.0064 13.1175 14.0061L12.6072 13.5663C12.9331 13.016 13.0597 12.345 12.9085 11.6719C12.592 10.2632 11.1848 9.38448 9.76995 9.70231C8.35908 10.0193 7.45803 11.4124 7.77536 12.825C8.09181 14.2337 9.49907 15.1124 10.9139 14.7946C10.9243 14.7922 10.9346 14.7898 10.945 14.7874L11.2381 15.672L11.2414 15.6821L11.2452 15.692C11.6036 16.6378 11.9745 17.6455 12.0095 18.4533C12.0265 18.8479 11.959 19.1307 11.8266 19.3235C11.7037 19.5025 11.4769 19.6736 11.016 19.7507L11.0156 19.7507C10.5196 19.8341 10.1878 19.811 9.87772 19.7332C9.60602 19.6651 9.34868 19.5566 8.99063 19.4057C8.90369 19.3691 8.81081 19.3299 8.71034 19.2883L8.70937 19.2879L6.37191 18.3239C6.46222 17.9498 6.47059 17.5499 6.38049 17.1488C6.06404 15.7401 4.65678 14.8614 3.24196 15.1793C1.83109 15.4962 0.930041 16.8894 1.24737 18.3019C1.5646 19.7141 2.97155 20.5892 4.3859 20.2715C4.5411 20.2366 4.68953 20.1891 4.83085 20.13L10.4268 29.2161ZM11.3698 31.341L10.8819 31.4506L10.9915 31.9384L11.9505 36.2073L12.0601 36.6952L12.5479 36.5856L36.8378 31.129L37.3257 31.0194L37.2161 30.5316L36.2571 26.2627L36.1475 25.7748L35.6597 25.8844L11.3698 31.341Z"
            fill="#FFCC15"
            stroke="#222326"
          />
        </svg>
      </div>
      {#if players[0]}
        <img src={"https://arweave.net/" + players[0].avatar} alt="avatar" />
        <div class="top-players-label top-players-label-mid">
          <div
            class="top-players-label-name top-players-label-name-mid font-work-sans-700 font-bold"
          >
            {players[0].handle}
          </div>
          <div class="top-players-label-pubkey">
            {truncatePubkey(players[0].address)}
          </div>
          <LeaderboardStampCounter count={players[0].collected} on:click={show(players[0].code)} />
        </div>
      {:else}
        <img src={profileIcon} alt="avatar" />
        <div class="top-players-label">
          <div class="top-players-label-name font-work-sans-700 font-bold">
            {"Unknown"}
          </div>
          <div class="top-players-label-pubkey">
            {truncatePubkey("XXXXXX")}
          </div>
          <LeaderboardStampCounter count={0} />
        </div>
      {/if}
    </div>
    <div class="top-players-avatar">
      <div class="top-players-avatar-placement">
        {3}
      </div>
      {#if players[2]}
        <img src={"https://arweave.net/" + players[2].avatar} alt="avatar" />
        <div class="top-players-label">
          <div class="top-players-label-name font-work-sans-700 font-bold">
            {players[2].handle}
          </div>
          <div class="top-players-label-pubkey">
            {truncatePubkey("XXXX")}
          </div>
          <LeaderboardStampCounter count={players[2].collected} on:click={show(players[2].code)} />
        </div>
      {:else}
        <img src={profileIcon} alt="avatar" />
        <div class="top-players-label">
          <div class="top-players-label-name font-work-sans-700 font-bold">
            {"Unknown"}
          </div>
          <div class="top-players-label-pubkey">
            {truncatePubkey("XXXXXX")}
          </div>
          <LeaderboardStampCounter count={0} />
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .top-players {
    width: 100%;
    height: 85%;
    padding-top: 46px;
  }

  .top-players h1 {
    font-size: 33px;
  }

  .top-players p {
    font-family: "Work Sans";
    font-weight: 400;
    font-size: 19px;
    letter-spacing: 0.24em;
  }

  .top-players-header {
    color: #ffffff;
    font-size: 30px;
    height: 100px;
    padding-top: 16px;
    margin-bottom: 10px;
  }

  .top-players-avatars {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 16px;
    height: 160px;
  }

  .top-players-avatar {
    position: relative;
    width: 74px;
    height: 74px;
    margin: 0 10px;
    border-radius: 3%;
    overflow: visible;
  }

  .top-players-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 3%;
    border: 2px solid #f2f3f4;
  }

  .top-players-avatar-placement {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -13px;
    left: 26.5px;
    width: 25px;
    height: 25px;
    background-color: #222326;
    border: 2px solid #f2f3f4;
    border-radius: 50%;
    z-index: 1;
    font-size: 14px;
    color: #f2f3f4;
  }

  .top-players-avatar-placement-mid {
    position: absolute;
    top: -28px;
    left: 42px;
    width: 25px;
    height: 25px;
    background-color: transparent;
    z-index: 1;
  }

  .top-players-avatar-mid {
    position: relative;
    width: 130px;
    height: 130px;
    margin: 0 10px;
    border-radius: 3%;
    margin-bottom: 6px;
  }

  .top-players-avatar-mid img {
    width: 100%;
    height: 100%;
    border-radius: 3%;
    border: 2px solid #f2f3f4;
  }

  .top-players-label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
  }
  .top-players-label-mid {
    padding-top: 12px;
  }
  .top-players-label-name {
    color: #fcfcfcfc;
    font-size: 13px;
  }
  .top-players-label-name-mid {
    font-size: 20px;
  }
  .top-players-label-pubkey {
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    margin-bottom: 6px;
  }
</style>
