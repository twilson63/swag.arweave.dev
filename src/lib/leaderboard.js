import { assoc, compose, find, map, path, pluck, prop, propEq } from "ramda";
import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @returns {AsyncReader}
 */
export function leaderboard() {
  return of(buildQuery())
    .chain((gql) =>
      ask(({ query, filter }) =>
        getPlayers(query, gql)
          .chain(getAndCountStamps(filter))
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

function countStamps(players) {
  return (stamps) =>
    players.reduce(
      (a, v) => {
        const collected = stamps.filter(propEq("asset", v.id)).length;
        return [...a, assoc("collected", collected, v)];
      },
      [],
    );
}

function getStampsforPlayers(filter) {
  return (players) =>
    filter([
      "compose",
      ["filter", [
        "compose",
        [["flip", ["includes"]], map(prop("id", players))],
        ["prop", "asset"],
      ]],
      ["values"],
      ["prop", "stamps"],
    ]);
}

function getPlayers(query, gql) {
  return query(gql)
    .map(compose(
      map(transform),
      pluck("node"),
      path(["data", "transactions", "edges"]),
    ));
}

function getAndCountStamps(filter) {
  return (players) =>
    getStampsforPlayers(filter)(players)
      .map(countStamps(players));
}
