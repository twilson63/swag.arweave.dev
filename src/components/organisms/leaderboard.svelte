<script>
  import { getContext } from "svelte";
  import LeaderboardTable from "./components/leaderboard-table.svelte";
  import LeaderboardTopPlayers from "./components/leaderboard-top-players.svelte";
  import LeaderboardSearchBar from "./components/leaderboard-search-bar.svelte";
  import pixelsAnimatingOne from "./assets/pixels-animating-1.svg";
  import pixelsAnimatingTwo from "./assets/pixels-animating-2.svg";
</script>

<div class="leaderboard-wrapper">
  <div class="leaderboard-header">
    <img class="pixels moving" src={pixelsAnimatingOne} alt="pixels animating" />
    <img class="pixels-two moving-delay" src={pixelsAnimatingTwo} alt="pixels animating" />
    <LeaderboardTopPlayers />
    <LeaderboardSearchBar />
  </div>
  <div class="leaderboard-detail">
    <LeaderboardTable />
  </div>
</div>

<style>
  .leaderboard-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f2f3f4;
  }
  .leaderboard-header {
    height: 56%;
    min-height: 500px;
    width: 100%;
    background-color: #222326;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    position: relative; /* add this line to create a new stacking context */
    z-index: 1;
  }
  .leaderboard-detail {
    height: 44%;
    min-height: 400px;
    width: 100%;
  }

  @keyframes animating {
    0% {
      transform: scale(1);
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
    50% {
      transform: translate(10px, 50px) scale(1.5) rotate(-0.1turn);
      opacity: 25%;
    }
    75% {
      opacity: 50%;
    }
    100% {
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
  }
  @keyframes animatingTwo {
    0% {
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
    50% {
      transform: translate(10px, 200px) scale(0.25) rotate(0.1turn);
      opacity: 25%;
    }
    75% {
      opacity: 50%;
    }
    100% {
      transform: translate(0, -50px) scale(1) rotate(0turn);
      opacity: 10%;
    }
  }
  .pixels {
    position: absolute;
    z-index: -50;
  }
  .pixels-two {
    position: absolute;
    z-index: -100;
  }
  .moving {
    animation: animating infinite 20s linear;
  }
  .moving-delay {
    animation: animatingTwo infinite 30s linear;
  }
</style>
