import { leaderboard } from "./leaderboard.js";
import { playerStamps } from "./player-stamps.js";
import { player } from "./player.js";
import { stamp } from "./stamp.js";
import { register } from "./register.js";
import { profile } from "./profile.js";
import { createProfile } from "./create-profile.js";
import { uploadAvatar } from "./upload-avatar.js";
import crocks from "crocks";
import { keys } from "ramda";

const { Async } = crocks;

/**
 * @typedef Player
 * @property {string} id - tx id for player profile
 * @property {string} handleName
 * @property {string} avatar
 * @property {string} banner
 * @property {string} name
 * @property {string} bio
 * @property {string} [code] - qr code
 * @property {{asset: string, address: string}[]} [stamps]
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
 * @param {{profileTxId: string, handle: string, avatar: string, address: string, code: string}} player - player data to register
 * @returns {Promise<string>}
 */

/**
 * @callback Profile
 * @params {string} address
 * @returns {Promise<Player>}
 */

/**
 * @callback CreateProfile
 * @param {{handle: string, avatar: string, bio: string}} profile
 * @returns {Promise<{id:string}>}
 */

/**
 * @callback UploadAvatar
 * @param {File} file
 * @param {string} mimeType
 * @returns {Promise<{id:string}>}
 */

/**
 * @callback PlayerStamps
 * @param {string} token
 * @returns {Promise<any>}
 */

/**
 * @typedef {Object} Swag
 * @property {Leaderboard} leaderboard
 * @property {GetPlayer} player
 * @property {Stamp} stamp
 * @property {Register} register
 * @property {Profile} profile
 * @property {CreateProfile} createProfile
 * @property {UploadAvatar} uploadAvatar
 * @property {PlayerStamps} playerStamps
 */
// application libary
export default {
  /**
   * @param {any} env
   * @returns {Swag}
   */
  init(env) {
    // could wrap all env functions in an Async Promise
    const services = keys(env).reduce((s, k) => ({ ...s, [k]: Async.fromPromise(env[k]) }), {});
    const fork =
      (fn) =>
      (...args) =>
        fn(...args)
          .runWith(services)
          .toPromise();

    return Object.freeze({
      leaderboard: fork(leaderboard),
      player: fork(player),
      stamp: fork(stamp),
      register: fork(register),
      profile: fork(profile),
      createProfile: fork(createProfile),
      uploadAvatar: fork(uploadAvatar),
      playerStamps: fork(playerStamps)
    });
  }
};
