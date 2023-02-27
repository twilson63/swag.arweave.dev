import { assoc, compose, prop, propEq, values, sortWith, descend } from "ramda";
import { AsyncReader, Async } from "./utils.js";

const { of, ask, lift } = AsyncReader;

/**
 * @returns {AsyncReader}
 */
export function leaderboard() {
  return of("PN1UdRoELsWRulkWwmO6n_27d5lFPo4q8VCWvQw7U14")
    .chain((contract) =>
      ask(({ getState }) =>
        getState(contract)
          .map(compose(values, prop("players")))
          .chain(fetchStamps)
          .map(sortWith([descend(prop("collected"))]))
      )
    )
    .chain(lift);
}

// get stamps data fast!
function fetchStamps(players) {
  return Async.fromPromise(fetch)(
    "https://cache-1.permaweb.tools/contract?id=61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI"
    //"https://cache.permapages.app/61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI"
  )
    .chain((res) => Async.fromPromise(res.json.bind(res))())
    .map(prop("state"))
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
