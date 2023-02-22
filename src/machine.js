import { createMachine, state, transition, invoke, reduce } from 'robot3'

import Lib from "./lib/index.js";
import { register, deployContract, writeAction, getState } from "./services/warp.js";
import { dispatch, get, query, toArrayBuffer } from "./services/ar-utils.js";
import { stamp, count, filter } from "./services/stamp-utils.js";

const { leaderboard, player } = Lib.init({query,
  get,
  dispatch,
  register,
  stamp,
  count,
  filter,
  deployContract,
  writeAction,
  toArrayBuffer,
  getState
})

export default createMachine({
  // loading: invoke(leaderboard,
 loading: invoke(() => Promise.resolve([{
      id: 'XFvaK9uJOBzU55sx3MG5aBeDNs8x1PIeOkN8PQY4atc',
      handle: 'rakis',
      address: 'vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI',
      bio: 'developer',
      avatar: 'fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI',
      collected: [],
      given: []
    }]),
    transition('done', 'leaderboard',
      reduce((ctx, ev) => ({ ...ctx, players: ev.data }))
    ),
    transition('error', 'leaderboard')
  ),
  leaderboard: state(
    transition('show', 'getPlayer'),
    transition('register', 'register')
  ),
  // getPlayer: invoke((_, ev) => player(ev.id), 
  getPlayer: invoke((_, ev) => Promise.resolve({
    id: 'XFvaK9uJOBzU55sx3MG5aBeDNs8x1PIeOkN8PQY4atc',
      handle: 'rakis',
      address: 'vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI',
      bio: 'developer',
      avatar: 'fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI',
      collected: [],
      given: []
  }),
    transition('done', 'player', 
      reduce((ctx, ev) => ({...ctx, player: ev.data}))
    ),
    transition('error', 'player', 
      reduce((ctx, ev) => {
        console.log(ev)
      })
    )
  ),
  player: state(
    transition('stamp', 'stampPlayer'),
    transition('reset', 'resetPlayer'),
    transition('close', 'leaderboard')
  ),
  stampPlayer: state(),
  resetPlayer: state()

  
})
