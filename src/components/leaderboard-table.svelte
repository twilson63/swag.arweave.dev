<script>
  import { getContext } from "svelte";
  import LeaderboardTableRow from "./leaderboard-table-row.svelte";

  export async function leaderboardTest() {
  
    return Promise.resolve([{
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "rakis",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "rakis",
      "bio": "Permaweb Developer",
      "email": "",
      "links": {
        "twitter": "rakis_me",
        "github": "rakis-me",
        "discord": "tom-permapages#3217"
      },
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 10
    }, {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "dmac",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "dmac",
      "bio": "Permaweb Developer",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 11
    }, {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "vince",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "vince",
      "bio": "Permaweb Developer",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 12
    }, {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "nickj",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "nickj",
      "bio": "Permaweb Developer",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 13
    }, {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "justin",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "jshaw",
      "bio": "Permaweb Developer",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 14
    }, {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "geoffrey",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "geoffrey",
      "bio": "Permaweb Developer",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 15
    }, {
      "id": "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
      "handleName": "saif",
      "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "avatarURL": "https://arweave.net:443/fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
      "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "bannerURL": "https://arweave.net:443/a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
      "name": "mrsaif",
      "bio": "Permaweb Developer",
      "email": "",
      "wallets": {
        "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI": 1
      },
      stamps: {},
      qrcode: 16
    }])
  
}


  async function rankPlayers() {
    let players = await leaderboardTest();
    players = players.slice(3);
    return players.map((p, i) => {
        return {...p, ...{ index: i + 4, stampCount: 78}};
    });
  }

</script>


<style>
    .leaderboard-table {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 16px;
        width: 100%;
        height: 100%;
    }
</style>


<div class="leaderboard-table">
    
    {#await rankPlayers() then players}
        {#each players as player}
            <LeaderboardTableRow player={player}/>
        {/each}
    {/await}

</div>