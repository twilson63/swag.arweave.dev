<script>
  import { getContext } from "svelte";
  import LeaderboardTable from "./components/leaderboard-table.svelte";
  import LeaderboardTopPlayers from "./components/leaderboard-top-players.svelte";
  import LeaderboardSearchBar from "./components/leaderboard-search-bar.svelte";

</script>

<style>
  .leaderboard-wrapper {
      height: 100%;
      width: 100%;
      position: absolute; 
      top: 0; 
      left: 0; 
      background-color: #F2F3F4;
  }
  .leaderboard-header {
      height: 62%;
      min-height: 300px;
      width: 100%;
      background-color: #222326;
      border-bottom-left-radius: 10%;
      border-bottom-right-radius: 10%;
  }
  .leaderboard-detail {
      height: 38%;
      min-height: 400px;
      width: 100%;
  }
    
</style>


<div class="leaderboard-wrapper">
    <div class="leaderboard-header">
      <LeaderboardTopPlayers />
      <LeaderboardSearchBar />
    </div>
    <div class="leaderboard-detail">
      <LeaderboardTable />
    </div>
</div>
