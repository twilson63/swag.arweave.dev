<script>
  import { robot } from "./store";
  import { compressAndResizeImage } from "./lib/upload-avatar";
  import PlayerList from "./components/leaderboard.svelte";
  import PlayerShow from "./components/show.svelte";
  import Player from "./components/player.svelte";
  import StampConfirm from "./components/confirm-stamp.svelte";
  import PlayerRegister from "./components/register.svelte";
  import PlayerForm from "./components/form.svelte";
  import Splash from "./components/splash.svelte";
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

  // async function show(e) {
  //   await send({ type: "show", id: e.detail.code });
  // }
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
  <Splash msg={null} />
  <!-- {:else if current === "loadPlayer"} -->
  <!-- <Splash msg="loading player..." /> -->
{:else if current === "submitting"}
  <Splash msg="Check tabs for arweave.app to sign transactions" />
{:else if current === "leaderboard" || current === "viewPlayer" || current === "loadPlayer"}
  <PlayerList
    players={context.players}
    on:show={(e) => send({ type: "show", code: e.detail.code })}
  />
  {#if current === "viewPlayer"}
    <PlayerShow bind:current player={context.player} on:close={() => send("close")} />
  {/if}
{:else if current === "player"}
  <Player
    bind:current
    player={context.player}
    on:stamp={() => send({ type: "stamp" })}
    on:click={() => send({ type: "stamp" })}
    on:reset={() => send({ type: "reset" })}
  />
{:else if current === "stamping"}
  <Splash msg={null} />
{:else if current === "confirmation"}
  <StampConfirm player={context.player} bind:current on:click={() => send("continue")} />
{:else if current === "hoodie"}
  <!-- TODO: check -->
  <Hoodie bind:current hoodie={context.hoodie} on:click={() => send("close")} />
{:else if current === "register"}
  <!-- TODO: modal -->
  <PlayerRegister bind:current id={qr} on:click={() => send("continue")} />
{:else if current === "form"}
  <!-- TODO: modal -->
  <PlayerForm on:submit={createPlayer} />
{:else if current === "error"}
  <Error error={context.error} on:click={() => send("continue")} />
{:else if current === "resetPlayer"}
  <Splash msg={null} />
{/if}
