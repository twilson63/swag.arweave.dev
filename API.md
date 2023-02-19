# API

This swag application needs to allow players to register, allow visitors to STAMP
and show a view of a leaderboard and individual player.

## How do I access the library in the presentation layer?

```js
import { getContext } from 'svelte'

const api = getContext('data')
...
```

## Methods

### Leaderboard

The leaderboard function return a leaderboard of all the players sorted by the
number of stamps they have received.

```js
const { leaderboard } = getContext("data");

const players = await leaderboard();
```

### Player

The player function returs a single player based on the QRCode Identifier

```js
const { player } = getContext("data");

const player = await player("1");
```

### Stamp

The stamp function stamps the atomic token profile using a users wallet.

```js
const { stamp } = getContext("data");

// use the player's TX ID to stamp
const result = await stamp("PLAYER_TX_ID");
```

### Profile

The profile function returns a wallet addresses arprofile data

```js
const { profile } = getContext("data");

const address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI";
const profile = await profile(address);
```

### Register

> The register method takes a QR id and wallet address looks up the arprofile
> via wallet address and return the profile handle name, avatar etc.

The register function takes a QR id, if the qr code is not matched then a
request is made to get the waller id from the arweaveWallet object. This
function will create the Atomic Token Profile, by composing the Atomic Token +
ANS - 110 + ArProfile standards. As a result it will be STAMPable for the
participants.

```js
const { register } = getContext("data");

const address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI";
const profile = await profile(address);
// edit or change or create
const result = await register("1", profile);
```
