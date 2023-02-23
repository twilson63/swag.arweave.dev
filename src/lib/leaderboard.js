import { assoc, compose, find, map, path, pluck, prop, propEq, values } from "ramda";
import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @returns {AsyncReader}
 */
export function leaderboard() {
  return of("PN1UdRoELsWRulkWwmO6n_27d5lFPo4q8VCWvQw7U14")
    .chain((contract) =>
      ask(({ query, filter, getState }) =>
        //getPlayers(query, gql)
        getState(contract)
          .map((x) => (console.log(x), x))
          .map(compose(values, prop("players")))
          .map((x) => (console.log("players", x), x))
          //.chain(getAndCountStamps(filter))
          .map((players) => [
            {
              code: "10",
              token: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
              handle: "rakis",
              avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
              bio: "Permaweb Developer",
              address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI"
            },
            {
              code: "12",
              token: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
              handle: "dmac",
              avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
              bio: "Arweave Pioneer",
              address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI"
            },
            {
              code: "13",
              token: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
              handle: "vincej",
              avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
              bio: "Alex Cofounder",
              address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI"
            },
            {
              code: "14",
              token: "O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw",
              handle: "nickj",
              avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
              bio: "Alex Cofounder",
              address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI"
            }
          ])
      )
    )
    .chain(lift);
}

function countStamps(players) {
  return (stamps) =>
    players.reduce((a, v) => {
      const collected = stamps.filter(propEq("asset", v.id)).length;
      return [...a, assoc("collected", collected, v)];
    }, []);
}

function getStampsforPlayers(filter) {
  return (players) =>
    filter([
      "compose",
      [
        "filter",
        ["compose", [["flip", ["includes"]], map(prop("id", players))], ["prop", "asset"]]
      ],
      ["values"],
      ["prop", "stamps"]
    ]);
}

function getAndCountStamps(filter) {
  return (players) => getStampsforPlayers(filter)(players).map(countStamps(players));
}
