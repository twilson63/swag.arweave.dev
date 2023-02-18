import crocks from "crocks";

const { Async, ReaderT } = crocks;
const { ask, of, lift } = ReaderT(Async);

/**
 * @param {string} tx - transactionId
 * @returns {AsyncReader}
 */
export function stamp(tx) {
  return of(tx)
    .chain((tx) => ask(({ stamp }) => Async.fromPromise(stamp)(tx)))
    .chain(lift);
}
