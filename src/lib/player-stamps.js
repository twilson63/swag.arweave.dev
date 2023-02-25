import { AsyncReader, Async } from "./utils.js";
import { filter, prop, propEq, values } from "ramda";
const { of, ask, lift } = AsyncReader;

/**
 * @param {string} token
 * @returns {AsyncReader}
 */
export function playerStamps(token) {
  return of(token)
    .chain((token) => ask(() => fetchStamps().map(filter(propEq("asset", token)))))
    .chain(lift);
}

function fetchStamps() {
  return Async.fromPromise(fetch)(
    "https://cache.permapages.app/61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI"
  )
    .chain((res) => Async.fromPromise(res.json.bind(res))())
    .map(prop("stamps"))
    .map(values);
}
