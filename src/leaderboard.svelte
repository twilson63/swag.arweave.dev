<script>
  import { robot } from "./store";
  import { compressAndResizeImage } from "./lib/upload-avatar";
  import PlayerList from "./components/organisms/leaderboard.svelte";
  import Player from "./components/player.svelte";
  import StampConfirm from "./components/confirm-stamp.svelte";
  import PlayerRegister from "./components/register.svelte";
  import PlayerForm from "./components/form.svelte";
  import Splash from "./components/atoms/splash.svelte";
  import Hoodie from "./components/hoodie-status.svelte";
  import Error from "./components/error.svelte";

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
    console.log("show");
    console.log(e.detail);
    await send({ type: "show", id: e.detail.code });
  }
  async function createPlayer({ target }) {
    // compress & resize file
    const avatar = await compressAndResizeImage(target.avatar.files[0]);

    await send({
      type: "register",
      code: qr,
      handle: target.handle.value,
      file: avatar,
      bio: target.bio.value
    });
  }
</script>

{#if current === "loading"}
  <Splash />
{:else if current === "submitting"}
  <Splash msg="Check tabs for arweave.app to sign transactions" />
{:else if current === "leaderboard"}
  <PlayerList players={context.players} />
{:else if current === "player"}
  <Player
    bind:current
    player={context.player}
    on:stamp={() => send({ type: "stamp" })}
    on:click={() => send({ type: "stamp" })}
    on:reset={() => send({ type: "reset" })}
  />
{:else if current === "stamping"}
  <Splash />
{:else if current === "confirmation"}
  <StampConfirm player={context.players[0]} bind:current on:click={() => send("continue")} />
{:else if current === "hoodie"}
  <Hoodie bind:current hoodie={context.hoodie} on:click={() => send("close")} />
{:else if current === "register"}
  <PlayerRegister bind:current id={qr} on:click={() => send("continue")} />
{:else if current === "form"}
  <PlayerForm on:submit={createPlayer} />
{:else if current === "error"}
  <Error error={context.error} on:click={() => send("continue")} />
{:else if current === "resetPlayer"}
  <Splash />
{/if}
