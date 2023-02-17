import { leaderboard } from './leaderboard.js'
import { player } from './player.js'
import { stamp } from './stamp.js'
import { register } from './register.js'
import { profile } from './profile.js'

// application libary
export default {
  init(env) {
    return Object.freeze({
      leaderboard,
      player: (code) => player(code).runWith(env).toPromise(),
      stamp,
      register: (player) => register(player).runWith(env),
      profile
    })
  }
}