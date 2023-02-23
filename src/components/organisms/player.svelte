<script>
  import { onMount } from "svelte";

  import PlayerCard from "../molecules/player-card.svelte";
  import PlayerStampCount from "../molecules/player-stamp-count.svelte";
  import PlayerRegister from "../molecules/player-register.svelte";

  import Loader from "../atoms/loader.svelte";
  import Modal from "../molecules/modal.svelte";

  import stampIcon from "../../assets/stamp.svg";
  import continueIcon from "../../assets/continue.svg";

  const TEMP_PROFILE_STAMPED = {
    id: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
    handleName: "SebMasterOverlord",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    banner: "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    bannerURL: "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    name: "seb",
    bio: "Developer and Founder of Permapages, Permanotes, and Hyper (L) Web (L) Javascript (L) Arweave (Elephant emoji)",
    email: "",
    wallets: {
      "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
    }
  };

  const TEMP_STAMP_LIST = [
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    },
    {
      name: "seb",
      avatarURL: "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"
    }
  ];

  export let player = null;

  let queryId;
  let fetchedPlayer;

  // TODO: check wallet connection
  let walletConnected = true;
  let showWalletConnect = false;

  let stampConfirmed = false;
  // TODO: stampCompleted = true if stamp clicked, wallet connected and continue clicked
  let stampCompleted = false;

  let stampQueueCompleted = true;

  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search);
    queryId = searchParams.get("id");
  });

  // TODO: if wallet is not connected, connect wallet -> show stamp success -> continue -> get stamp count modal -> if 3/3, register
  function handleStamp() {
    if (walletConnected) {
      stampConfirmed = true;
    } else {
      showWalletConnect = true;
    }
  }

  function handleComplete() {
    // TODO: get stamp count of player, if >= 3 then stampQueueCompleted = true
    stampCompleted = true;
  }

  function handleGoToLeaderboard() {
    window.location.href = "/";
  }
</script>

<!-- <Loader active={true} /> -->
{#if !player && stampQueueCompleted}
  <PlayerRegister id={queryId} />
{:else if !stampCompleted}
  {#if showWalletConnect}
    <div>Wallet Connect</div>
  {:else}
    <Modal
      on:click
      on:stamp
      handleAction={stampConfirmed ? handleComplete : handleStamp}
      actionLabel={stampConfirmed ? "Continue" : "Stamp"}
      actionIcon={stampConfirmed
        ? { icon: continueIcon, start: false }
        : { icon: stampIcon, start: false }}
      actionDisabled={false}
    >
      <PlayerCard
        completed={stampConfirmed}
        username={`@${player.handleName}`}
        avatar={`https://arweave.net/${player.avatar}`}
        bio={player.bio}
        stampList={TEMP_STAMP_LIST}
      />
    </Modal>
  {/if}
{:else}
  <Modal
    on:click
    handleAction={handleGoToLeaderboard}
    actionLabel={"Go to Leaderboard"}
    actionIcon={{ icon: continueIcon, start: false }}
    actionDisabled={false}
  >
    <PlayerStampCount />
  </Modal>
{/if}
