import crocks from "crocks";
import { compose, find, map, path, pluck, prop, propEq } from "ramda";

const { Async, ReaderT } = crocks;
const { of, ask, lift } = ReaderT(Async);

export function leaderboard() {
  return of(buildQuery())
    .chain((gql) =>
      ask(({ query }) =>
        Async.fromPromise(query)(gql)
          .map(compose(
            map(transform),
            pluck("node"),
            path(["data", "transactions", "edges"]),
          ))
        // TODO Add Stamp Count for Each Player
      )
    )
    .chain(lift);
}

function transform(node) {
  const getTag = (name) => prop("value", find(propEq("name", name), node.tags));
  return {
    id: node.id,
    address: path(["owner", "address"], node),
    handle: getTag("handle"),
    name: getTag("Title"),
    bio: getTag("Description"),
    code: getTag("SWAG-CODE"),
  };
}

function buildQuery() {
  return {
    query: `query($protocols:[String!]!, $apps:[String!]!) {
    transactions(tags: [
      {name:"Protocol-Name", values: $protocols},
      {name:"App-Name", values: $apps}
    ]) {
      edges {
        node {
          id 
          owner {
            address 
          }
          tags {
            name
            value 
          }
        }
      }
    }
  }`,
    variables: { "protocols": ["Account-0.3"], "apps": ["SmartWeaveContract"] },
  };
}
