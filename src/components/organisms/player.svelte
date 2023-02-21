<script>
  //   import { getContext, onMount } from "svelte";

  //   const { player } = getContext("data");

  import PlayerCard from "../molecules/player-card.svelte";

  // import Loader from "../atoms/loader.svelte";
  import Modal from "../molecules/modal.svelte";

  import stampIcon from "../../assets/stamp.svg";

  //   let queryId;
  //   let fetchedPlayer;

  //   onMount(() => {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     queryId = searchParams.get("id");

  //     (async function () {
  //         try {
  //             fetchedPlayer = await player(queryId);
  //         }
  //         catch {
  //             fetchedPlayer = null;
  //         }
  //     })();
  //   });

  function handleStamp() {
    console.log("stamp");
  }

  const actionIcon = {
    icon: stampIcon,
    start: true,
  };

  let TEMP_PROFILE = {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "SebMasterOverlord",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "seb",
      "bio": "Developer and Founder of Permapages, Permanotes, and Hyper (L) Web (L) Javascript (L) Arweave (Elephant emoji)",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      }
  }

  let TEMP_STAMP_LIST = [
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
    {"name": "seb", "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI"},
  ]

</script>

<!-- <Loader active={true} /> -->

<Modal handleAction={handleStamp} actionLabel={"Stamp"} {actionIcon}>
  <PlayerCard 
    completed={false}
    username={`@${TEMP_PROFILE.handleName}`}
    avatar={TEMP_PROFILE.avatarURL}
    bio={TEMP_PROFILE.bio}
    stampList={TEMP_STAMP_LIST}
  />
</Modal>

<style>
</style>
