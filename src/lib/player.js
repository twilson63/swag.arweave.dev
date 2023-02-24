import { compose, head, path, pluck, prop, propEq } from "ramda";
import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @param {string} id - QR Code Identifier
 * @returns {AsyncReader}
 */
// changing to get stamps for player
export function player(player) {
  return of(player)
    .chain((player) =>
      ask(
        ({ filter }) =>
          filter(getAssetIds(player))
            .map((x) => (console.log(x), x))
            .map((stamps) => stamps.filter(propEq("asset", player.token)))
            .map((x) => (console.log(x), x))

        // need to get stamps given and add to the player card
        //.chain((player) => filter(getAddressIds(player)).map((given) => ({ ...player, given })))
      )
    )
    .chain(lift);
}

function getAssetIds(player) {
  return ["compose", ["values"], ["prop", "stamps"]];
}

// function getAddressIds(player) {
//   return [
//     "compose",
//     ["filter", ["propEq", "address", player.address]],
//     ["values"],
//     ["prop", "stamps"]
//   ];
// }
