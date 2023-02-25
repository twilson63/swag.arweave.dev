// need to get how many stamps a user has done.
import { AsyncReader, Async } from "./utils.js";
import { filter, prop, propEq, values } from "ramda";
const { of, ask, lift } = AsyncReader;

const contract = "61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI";
export function userStamps(address, tokens) {
  return ask(({ getState }) =>
    getState(contract)
      .map(prop("stamps"))
      .map(values)
      .map(filter(propEq("address", address)))
      .map(filter((s) => tokens.includes(s.asset)))
  ).chain(lift);
}
