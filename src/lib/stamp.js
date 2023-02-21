import { AsyncReader } from "./utils.js";

const { ask, of, lift } = AsyncReader;

/**
 * @param {string} tx - transactionId
 * @returns {AsyncReader}
 */
export function stamp(tx) {
  return of(tx)
    .chain((tx) => ask(({ stamp }) => stamp(tx)))
    .chain(lift);
}
