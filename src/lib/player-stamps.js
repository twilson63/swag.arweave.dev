import { AsyncReader, Async } from "./utils.js";
import { filter, prop, propEq, values, sortWith, descend } from "ramda";
const { of, ask, lift } = AsyncReader;

/**
 * @param {string} token
 * @returns {AsyncReader}
 */
export function playerStamps(token) {
  return of(token)
    .chain((token) =>
      ask(() =>
        fetchStamps()
          .map(filter(propEq("asset", token)))
          .map(sortWith([descend(prop("timestamp"))]))
      )
    )
    .chain(lift);
}

function fetchStamps() {
  return Async.fromPromise(fetch)(
    "https://cache-1.permaweb.tools/contract?id=61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI"
    //"https://cache.permapages.app/61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI"
  )
    .chain((res) => Async.fromPromise(res.json.bind(res))())
    .map(prop("state"))
    .map(prop("stamps"))

    .map(values);
}
