<script>
  import { robot } from "./store";
  export let tx;
  export let id;

  const send = $robot.send;

  $: context = $robot.context;
  $: current = $robot.machine.current;
</script>

{#if current === "loading"}
  <div>Loading...</div>
{:else if current === "leaderboard"}
  {#each context.players as player}
    <div>Leaderboard view</div>
    <pre>{JSON.stringify(player, null, 2)}</pre>
    <button class="btn" on:click={() => send({ type: "show", id: "1" })}
      >Show Player</button
    >
  {/each}
{:else if current === "player"}
  <div>Show Player</div>
  <pre>{JSON.stringify(context.player, null, 2)}</pre>
  <button class="btn" on:click={() => send({ type: "close" })}>Close</button>
{/if}
