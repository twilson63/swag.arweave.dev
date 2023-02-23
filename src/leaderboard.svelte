<script>
  import { robot } from "./store";
  import PlayerList from "./components/organisms/leaderboard.svelte";
  import Player from "./components/organisms/player.svelte";
  import Splash from "./components/atoms/splash.svelte";
  export let tx;
  export let qr;

  const send = $robot.send;

  $: context = $robot.context;
  $: current = $robot.machine.current;

  if (qr) {
    send({ type: "id", id: qr });
  } else if (tx) {
    send({ type: "tx", tx });
  } else {
    send("load");
  }

  async function show(e) {
    console.log(e.detail);
    await send({ type: "show", id: e.detail.code });
  }
</script>

{#if current === "loading"}
  <Splash />
{:else if current === "leaderboard"}
  <PlayerList players={context.players} on:show={show} />
{:else if current === "player"}
  {console.log(context)}
  <Player
    player={context.player}
    on:stamp={() => send({ type: "stamp" })}
    on:click={() => send({ type: "close" })}
  />
{:else if current === "stamping"}
  <Splash />
{:else if current === "confirmation"}
  <div>Stamp Confirmed</div>
  <pre>{JSON.stringify(context, null, 2)}</pre>
{/if}
