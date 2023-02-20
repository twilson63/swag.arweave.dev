import { leaderboard } from "./leaderboard.js";
import { player } from "./player.js";
import { stamp } from "./stamp.js";
import { register } from "./register.js";
import { profile } from "./profile.js";

/**
 * @typedef Player
 * @property {string} id - tx id for player profile
 * @property {string} handleName
 * @property {string} avatar
 * @property {string} banner
 * @property {string} name
 * @property {string} bio
 * @property {string} [code] - qr code
 * @property {StampRecord[]} [stamps]
 */

/**
 * @callback Leaderboard
 * @returns {Promise<Player[]>}
 */

/**
 * @callback GetPlayer
 * @param {string} code - qr-code identifier
 * @returns {Promise<Player>}
 */

/**
 * @callback Stamp
 * @param {string} tx - player tx to stamp
 * @returns {Promise<number>} - returns new count
 */

/**
 * @callback Register
 * @param {Player} player - player data to register
 * @returns {Promise<string>}
 */

/**
 * @callback Profile
 * @params {string} address
 * @returns {Promise<Player>}
 */

/**
 * @typedef {Object} Swag
 * @property {Leaderboard} leaderboard
 * @property {GetPlayer} player
 * @property {Stamp} stamp
 * @property {Register} register
 * @property {Profile} profile
 */
// application libary
export default {
  /**
   * @param {any} env
   * @returns {Swag}
   */
  init(env) {
    return Object.freeze({
      leaderboard: () => leaderboard().runWith(env).toPromise(),
      player: (code) => player(code).runWith(env).toPromise(),
      stamp: (tx) => stamp(tx).runWith(env).toPromise(),
      register: (code, player) =>
        register({ ...player, code }).runWith(env).toPromise(),
      profile: (address) => profile(address).runWith(env).toPromise(),
    });
  },
};
