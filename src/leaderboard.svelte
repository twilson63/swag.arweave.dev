<script>
  import { getContext } from "svelte";
  import LeaderboardTable from "./components/leaderboard-table.svelte";
  import LeaderboardTopPlayers from "./components/leaderboard-top-players.svelte";

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
      height: 26%;
      min-height: 300px;
      width: 100%;
      background-color: #FF8500;
  }
  .leaderboard-detail {
      height: 74%;
      min-height: 400px;
      width: 100%;
  }
  .filter-section {
      height: 8%;
      min-height: 30px;
      width: 100%;
      background-color: #293241;
      text-align: center;
      color: white;
      font-size: 13px;
      display: flex; 
      align-items: center;
      justify-content: center;
      overflow-y: scroll;
  }

  .table-section {
    
  }
    
</style>


<div class="leaderboard-wrapper">
    <div class="leaderboard-header">
      <LeaderboardTopPlayers />
    </div>
    <div class="leaderboard-detail">
      <div class="filter-section">
        <p>filter / search section</p>
      </div>
      <LeaderboardTable />
    </div>
</div>
