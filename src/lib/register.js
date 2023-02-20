import crocks from "crocks";
import { validate } from "./model.js";

const { Async, ReaderT } = crocks;
const { ask, of, lift } = ReaderT(Async);

/**
 * registration needs
 * - create or use arProfile record
 * - create Atomic Token Player Contract
 * - register QR Code with Atomic Player Token
 */

/**
 * @param {Player} player - player profile data
 * @returns {AsyncReader}
 */
export function register(player) {
  return of(player)
    .chain((player) =>
      ask(({ dispatch }) =>
        Async.of(player)
          .chain(doValidate)
          .chain((player) =>
            Async.fromPromise(dispatch)({
              data: JSON.stringify(player),
              tags: [
                { name: "Content-Type", value: "application/json" },
                { name: "App-Name", value: "SmartWeaveContract" },
                { name: "App-Version", value: "0.3.0" },
                { name: "Contract-Src", value: "" },
                {
                  name: "Init-State",
                  value: JSON.stringify({
                    balances: { [player.addr]: 1 },
                    pairs: [],
                    swag: player.code,
                  }),
                },
                { name: "Protocol-Name", value: "Account-0.3" },
                { name: "handle", value: player.handle },
                { name: "Type", value: "profile" },
                { name: "Description", value: player.bio },
                { name: "Title", value: player.handle + " profile" },
              ],
            })
          )
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
