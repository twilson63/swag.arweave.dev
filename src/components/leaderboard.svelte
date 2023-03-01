<script>
  import LeaderboardTable from "./leaderboard/table.svelte";
  import LeaderboardTopPlayers from "./leaderboard/top-players.svelte";
  import LeaderboardSearchBar from "./leaderboard/search.svelte";
  import PixelsAnimatingOne from "./svgs/pixels-animating-1.svelte";
  import PixelsAnimatingTwo from "./svgs/pixels-animating-2.svelte";

  export let players;
</script>

<div class="leaderboard-wrapper">
  <div class="leaderboard-header">
    <div class="pixels moving">
      <PixelsAnimatingOne />
    </div>
    <div class="pixels-two moving-delay">
      <PixelsAnimatingTwo />
    </div>
    <LeaderboardTopPlayers {players} on:show />
    <!-- <LeaderboardSearchBar /> -->
  </div>
  <div class="leaderboard-detail">
    <LeaderboardTable {players} on:show />
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
    min-height: 450px;
    width: 100%;
    background-color: #222326;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    position: relative; /* add this line to create a new stacking context */
    z-index: 1;
    overflow: hidden;
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
