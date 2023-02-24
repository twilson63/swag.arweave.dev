import { assoc, compose, find, map, path, pluck, prop, propEq, values } from "ramda";
import { AsyncReader } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @returns {AsyncReader}
 */
export function leaderboard() {
  return of("PN1UdRoELsWRulkWwmO6n_27d5lFPo4q8VCWvQw7U14")
    .chain((contract) =>
      ask(({ filter, getState }) =>
        getState(contract)
          .map(compose(values, prop("players")))
          .chain(getAndCountStamps(filter))
      )
    )
    .chain(lift);
}

function countStamps(players) {
  return (stamps) =>
    players.reduce((a, v) => {
      const collected = stamps.filter(propEq("asset", v.token)).length;
      return [...a, assoc("collected", collected, v)];
    }, []);
}

function getStampsforPlayers(filter) {
  return (players) =>
    filter([
      "compose",
      //["filter", ["compose", ["flip", ["includes"]], pluck('token', players), ["prop", "asset"]]],
      ["values"],
      ["prop", "stamps"]
    ]);
}

function getAndCountStamps(filter) {
  return (players) => getStampsforPlayers(filter)(players).map(countStamps(players));
}
