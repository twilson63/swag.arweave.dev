<script>
  import { createEventDispatcher } from "svelte";

  export let player;

  const dispatch = createEventDispatcher();

  function truncatePubkey(pubkey) {
    return pubkey.slice(0, 7) + ".." + pubkey.slice(-3);
  }

  function show(code) {
    dispatch("show", { code });
  }
</script>

<div class="leaderboard-table-row cursor-pointer" on:click={() => show(player.code)} on:keypress>
  <div class="leaderboard-table-row-left">
    <div class="leaderboard-table-row-place flex items-center justify-center">
      <div class="font-bold">{player.index}</div>
    </div>
    <div class="leaderboard-table-row-player">
      <img src={"https://arweave.net/" + player.avatar} alt="avatar" />
    </div>
    <div class="leaderboard-table-row-labels">
      <div class="leaderboard-table-row-labels-name">
        {player.handle}
      </div>
      <div class="leaderboard-table-row-labels-pubkey">
        {truncatePubkey(player.address)}
      </div>
    </div>
  </div>
  <div class="leaderboard-table-row-right">
    <div class="leaderboard-table-row-stamps">
      <div class="leaderboard-table-row-stamps-action font-bold text-black">Collected</div>
      <div class="leaderboard-table-row-stamps-count">
        <div class="text-[18px] text-[#222326]">
          +{player.collected}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .leaderboard-table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: transparent;
    width: 90%;
    border: 1px solid #222326;
    border-radius: 11px;
    margin-bottom: 14px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .leaderboard-table-row-left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .leaderboard-table-row-right {
    padding-right: 14px;
  }

  .leaderboard-table-row-place {
    margin-left: 10px;
    color: #222326;
    width: 28px;
    height: 28px;
    padding-top: 2px;
  }

  .leaderboard-table-row-place p {
    font-size: 17px;
  }

  .leaderboard-table-row-player {
    width: 49px;
    height: 49px;
    margin-left: 12px;
  }

  .leaderboard-table-row-player img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #222326;
    border-radius: 9px;
  }

  .leaderboard-table-row-labels {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 12px;
  }

  .leaderboard-table-row-labels-name {
    font-weight: 700;
    font-size: 18px;
    color: #222326;
  }

  .leaderboard-table-row-labels-pubkey {
    font-weight: 500;
    font-size: 12px;
    color: #222326;
  }

  .leaderboard-table-row-stamps {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .leaderboard-table-row-stamps-action {
    font-weight: 500;
    font-size: 12px;
  }

  .leaderboard-table-row-stamps-count {
    font-weight: 700;
    font-size: 18px;
    margin-top: -6px;
  }
</style>
