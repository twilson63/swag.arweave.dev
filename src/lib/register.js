import { validate } from "./model.js";
import { Async, AsyncReader } from "./utils.js";
import { always } from "ramda";

const { ask, of, lift } = AsyncReader;

/**
 * registration needs
 * - create Atomic Token Player Contract
 * - register QR Code with Atomic Player Token
 */
/**
 * @typedef {Object} Player
 * @property {string} profileTxId
 * @property {string} address
 * @property {string} handle
 * @property {string} avatar
 * @property {string} code
 */
/**
 * @param {Player} player - player profile data
 * @returns {AsyncReader}
 */
export function register(player) {
  return of(player)
    .chain((player) =>
      ask(({ deployContract, writeAction }) =>
        Async.of(player)
          .chain(doValidate)
          .chain((player) =>
            // create Player Contract
            deployContract({
              srcTxId: "",
              initState: {
                balances: { [player.address]: 1 },
                pairs: [],
                swag: player.code,
              },
              tags: [
                { name: "Type", value: "profile" },
                { name: "Description", value: "Swag Player Card" },
                { name: "Title", value: player.handle },
                { name: "Render-With", value: "swag" },
                { name: "SWAG-Code", value: player.code },
                { name: "Profile", value: player.profileTxId },
              ],
            })
              // register Player on game contract
              .chain(({ contractTxId }) =>
                writeAction({
                  contract: "",
                  function: "register",
                  code: player.code,
                  token: contractTxId,
                })
              )
          )
          .map(always({ ok: true }))
      )
    ).chain(lift);
}

/**
 * {
          'Content-Type': 'application/json',
          'App-Name': 'SmartWeaveContract',
          'App-Version': '0.3.0',
          'Contract-Src': '',
          'Init-State': JSON.stringify({
            balances: { [player.addr]:1 }
          }),

        }
 */

function doValidate(player) {
  return Async.fromPromise(validate)(player);
}
