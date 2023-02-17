<script>
  import { getContext } from "svelte";

  const { leaderboard } = getContext("data");

  async function getTopThree() {
    let leaders = await leaderboard();
    let topThree = [];
    for(let i = 0; i < 3; i++){
      topThree.push(leaders[i]);
    }
    return topThree;
  }

</script>

{#await getTopThree() then topThree}
  <div class="avatar">
    <div class="w-24 rounded-xl">
      <img src="{topThree[0].avatarURL}" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-24 rounded-xl">
      <img src="{topThree[0].avatarURL}" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-24 rounded-xl">
      <img src="{topThree[0].avatarURL}" />
    </div>
  </div>
{/await}

