import { compose, head, path, pluck, prop } from "ramda";
import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @param {string} address - wallet address
 * @returns {AsyncReader}
 */
export function profile(address) {
  return of(address)
    .map(buildQuery)
    .chain((gql) =>
      ask(({ query, get }) =>
        query(gql)
          .map(getFirstIdforArProfile)
          .chain(get)
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

function getFirstIdforArProfile(result) {
  return compose(
    prop("id"),
    head,
    pluck("node"),
    path(["data", "transactions", "edges"]),
  )(result);
}
