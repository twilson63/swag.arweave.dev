import {
  assoc,
  compose,
  find,
  map,
  path,
  pluck,
  prop,
  propEq,
  values,
  sortWith,
  descend
} from "ramda";
import { AsyncReader, Async } from "./utils.js";

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
          // .chain(getAndCountStamps(filter))
          .chain(fetchStamps)
          .map(sortWith([descend(prop("collected"))]))
      )
    )
    .chain(lift);
}

// get stamps data fast!
function fetchStamps(players) {
  return Async.fromPromise(fetch)(
    "https://cache.permapages.app/61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI"
  )
    .chain((res) => Async.fromPromise(res.json.bind(res))())
    .map(prop("stamps"))
    .map(values)

    .map(countStamps(players));
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
