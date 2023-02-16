import { leaderboard } from './leaderboard.js'
import { player } from './player.js'
import { stamp } from './stamp.js'
import { register } from './register.js'

// application libary
export default {
  init(env) {
    return Object.freeze({
      leaderboard,
      player,
      stamp,
      register
    })
  }
}