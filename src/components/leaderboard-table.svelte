<script>
  import LeaderboardTableRow from "./leaderboard-table-row.svelte";

  export let players = [];

  async function rankPlayers() {
    players = players.slice(3);
    return players.map((p, i) => {
      return { ...p, ...{ index: i + 4, stampCount: 78 } };
    });
  }
</script>

<div class="leaderboard-table ">
  {#await rankPlayers() then players}
    {#each players as player}
      <LeaderboardTableRow {player} on:show />
    {/each}
  {/await}
</div>

<style>
  .leaderboard-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    width: 100%;
    height: 100%;
  }
</style>
