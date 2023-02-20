<script>
  import { getContext } from "svelte";
  import PlacementSuffix from "./placement-suffix.svelte";

  const { leaderboard } = getContext("data");

  async function getTopThree() {
    let players = await leaderboard();
    players.splice(0, 3);
    return players.map((p, i) => {
        return {...p, ...{ index: i + 1}};
    });
  }

</script>


<style>
    .top-players {
        width: 100%;
        height: 100%;
        padding-top: 27px;
    }

    .top-players-header {
        color: black;
        font-size: 16px;
    }

    .top-players-ribbon {
        height: 100px;
    }

    .top-players-avatars {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-players-avatar {
        position: relative;
        width: 70px;
        height: 70px;
        background-color: #293241;
        margin: 0 20px;
        border-radius: 18%;
    }
    
    .top-players-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 18%; 
        position: absolute;
        top: -4px;
        left: -2px;
    }

    .top-players-avatar-placement {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -13px;
        left: -12px;
        width: 28px;
        height: 28px;
        background-color: #FCFCFCFC;
        border: 1px solid #293241;
        border-radius: 50%;
        z-index: 1;
        font-size: 10px;
    }

    .top-players-avatar-mid {
        position: relative;
        width: 90px;
        height: 90px;
        background-color: #293241;
        margin: 0 20px;
        border-radius: 20%;
    }

    .top-players-avatar-mid img {
        width: 100%;
        height: 100%;
        border-radius: 20%; 
        position: absolute;
        top: -6px;
        left: -4px;
    }

    
</style>


<div class="top-players">
    <div class="top-players-header">
        top swag leaders
    </div>

    <div class="top-players-ribbon">
        <img src=""/>
    </div>

    <div class="top-players-avatars">
        {#await getTopThree() then players}
            <div class="top-players-avatar">
                <div class="top-players-avatar-placement">
                    <PlacementSuffix placement={players[1].index}/>
                </div>
                <img src="{players[0].avatarURL}"/>
            </div>
            <div class="top-players-avatar-mid">
                <div class="top-players-avatar-placement">
                    <PlacementSuffix placement={players[0].index}/>
                </div>
                <img src="{players[1].avatarURL}"/>
            </div>
            <div class="top-players-avatar">
                <div class="top-players-avatar-placement">
                    <PlacementSuffix placement={players[2].index}/>
                </div>
                <img src="{players[2].avatarURL}"/>
            </div>
        {/await}
    </div>

</div>