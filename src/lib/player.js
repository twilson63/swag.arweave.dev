import { compose, head, path, pluck, prop } from "ramda";
import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @param {string} id - QR Code Identifier
 * @returns {AsyncReader}
 */
export function player(id) {
  return of(id)
    .map(buildQuery)
    .chain((gql) =>
      ask(({ query, get, filter }) =>
        query(gql)
          .map(getFirstId)
          .chain(get)
          // need to get stamps collected and add to the player card
          .chain((player) =>
            filter(getAssetIds(player)).map((collected) => ({
              ...player,
              collected
            }))
          )
          // need to get stams given and add to the player card
          .chain((player) => filter(getAddressIds(player)).map((given) => ({ ...player, given })))
      )
    )
    .chain(lift);
}

function buildQuery(id) {
  return {
    query: `query($codes: [String!]) {
transactions(tags: [
  {name: "SWAG_CODE", values: $codes},
  {name: "Protocol-Name", values: ["Account-0.3"]}
]) {
  edges {
    node {
      id
    }
  }
}}`,
    variables: { codes: [id] }
  };
}

function getFirstId(result) {
  return compose(prop("id"), head, pluck("node"), path(["data", "transactions", "edges"]))(result);
}

function getAssetIds(player) {
  return ["compose", ["filter", ["propEq", "asset", player.id]], ["values"], ["prop", "stamps"]];
}

function getAddressIds(player) {
  return [
    "compose",
    ["filter", ["propEq", "address", player.address]],
    ["values"],
    ["prop", "stamps"]
  ];
}
