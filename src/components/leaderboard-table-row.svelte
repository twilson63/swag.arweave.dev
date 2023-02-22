<script>
    import StampCount from "./stamp-count.svelte";

    export let player;

    function truncatePubkey(pubkey) {
        return pubkey.slice(0, 7) + ".." + pubkey.slice(-3);
    }
</script>


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
        font-size: 17px;
        margin-left: 10px;
        color: #222326;
        width: 28px;
        height: 28px;
        border: 3px solid #222326;
        border-radius: 25px;
    }

    .leaderboard-table-row-place p{
        margin-top: -1px;
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
    }
</style>

<div class="leaderboard-table-row">
    <div class="leaderboard-table-row-left">
        <div class="leaderboard-table-row-place">
            <p>{ player.index }</p>
        </div>
        <div class="leaderboard-table-row-player">
            <img src="{ player.avatarURL }" alt="avatar"/>
        </div>
        <div class="leaderboard-table-row-labels">
            <div class="leaderboard-table-row-labels-name"> 
                { player.handleName }
            </div>
            <div class="leaderboard-table-row-labels-pubkey"> 
                { truncatePubkey(Object.keys(player.wallets)[0]) }
            </div>
        </div>
    </div>
    <div class="leaderboard-table-row-right">
        <div class="leaderboard-table-row-stamps">
            <div class="leaderboard-table-row-stamps-action"> 
                Collected
            </div>
            <div class="leaderboard-table-row-stamps-count"> 
                <StampCount count={player.stampCount} color="#222326"/>
            </div>
        </div>
    </div>
</div>