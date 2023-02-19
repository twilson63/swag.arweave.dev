import crocks from "crocks";
import { compose, head, path, pluck, prop } from "ramda";

const { Async, ReaderT } = crocks;
const { of, ask, lift } = ReaderT(Async);

/**
 * @param {string} id - QR Code Identifier
 * @returns {AsyncReader}
 */
export function player(id) {
  return of(id)
    .map(buildQuery)
    .chain((gql) =>
      ask(({ query, get, filter }) =>
        Async.fromPromise(query)(gql)
          .map(compose(
            pluck("node"),
            path(["data", "transactions", "edges"]),
          ))
          .map(head)
          .map(prop("id"))
          .chain((tx) => Async.fromPromise(get)(tx))
          // need to get stamps collected and add to the player card
          .chain(player => Async.fromPromise(filter)(['compose',
            ['filter', ['propEq', 'asset', player.id]],
            ['values'],
            ['prop', 'stamps']
          ]).map(collected => ({ ...player, collected }))

          )
          // need to get stams given and add to the player card
          .chain(player => Async.fromPromise(filter)(['compose',
            ['filter', ['propEq', 'address', player.address]],
            ['values'],
            ['prop', 'stamps']
          ]).map(given => ({ ...player, given }))
          )
      )
    ).chain(lift);
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
    variables: { codes: [id] },
  };
}
