<script>
  import { getContext } from "svelte";

  const { leaderboard } = getContext("data");
</script>

{#await leaderboard() then players}
  {#each players as player}
    <div>Leaderboard view</div>
    <pre>{JSON.stringify(player, null, 2)}</pre>
  {/each}
{/await}