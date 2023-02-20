<script>
  import { getContext } from "svelte";
  import PlacementSuffix from "./placement-suffix.svelte";

  const { leaderboard } = getContext("data");


  async function rankPlayers() {
    let players = await leaderboard();
    players = players.slice(3);
    return players.map((p, i) => {
        return {...p, ...{ index: i + 4}};
    });
  }

</script>


<style>
    .leaderboard-table {
        width: 100%;
        height: 100%;
        
    }

    .leaderboard-table-row {
        display: flex;
        justify-content: space-between;
        height: 70px;
        background-color: #FCFCFCFC;
        width: 100%;
        border-bottom: 1px solid #293241;
    }

    .leaderboard-table-row-place {
        font-size: 9px;
        padding-left: 12px;
        padding-top: 8px;
        color: #293241;
    }

    .leaderboard-table-row-player {
        height: 36px;
        width: 36px;
        padding-top: 23px;
        margin-right: 22px;
    }

    .leaderboard-table-row-player img {
        border-radius: 6px;
    }
</style>


<div class="leaderboard-table">

    {#await rankPlayers() then players}
        {#each players as player}
            <div class="leaderboard-table-row">
                <div class="leaderboard-table-row-place">
                    <PlacementSuffix placement={player.index} />
                </div>
                <div class="leaderboard-table-row-player">
                    <img src="{player.avatarURL}" />
                </div>
            </div>
        {/each}
    {/await}

</div>