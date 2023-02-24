import { AsyncReader, Async } from "./utils.js";
import { filter, prop, propEq, values } from "ramda";
const { of, ask, lift } = AsyncReader;

/**
 * @param {string} token
 * @returns {AsyncReader}
 */
export function playerStamps(token) {
  return of(token)
    .chain((token) =>
      ask(({ getState }) =>
        getState("61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI")
          .map(prop("stamps"))
          .map(values)
          .map(filter(propEq("asset", token)))
      )
    )
    .chain(lift);
}
