import crocks from "crocks";
import { compose, head, path, pluck, prop } from "ramda";

const { Async, ReaderT } = crocks;
const { of, ask, lift } = ReaderT(Async);

/**
 * @param {string} address - wallet address
 * @returns {any}
 */
export function profile(address) {
  return of(address)
    .map(buildQuery)
    .chain((gql) =>
      ask(({ query, get }) =>
        Async.fromPromise(query)(gql)
          .map(compose(
            pluck("node"),
            path(["data", "transactions", "edges"]),
          ))
          .map(head)
          .map(prop("id"))
          .chain((tx) => Async.fromPromise(get)(tx))
          .map((data) => JSON.parse(data))
      )
    ).chain(lift);
}

function buildQuery(address) {
  return {
    query: `query ($owners: [String!]) {
transactions(
  owners: $owners,
  tags: [
    {name: "Protocol-Name", values: ["Account-0.3"]}
  ]
) {
  edges {
    node {
      id
    }
  }
}
  }`,
    variables: { "owners": [address] },
  };
}
