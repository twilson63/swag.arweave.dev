import { AsyncReader } from "./utils.js";

const { ask, lift } = AsyncReader;

/**
 * @param {string} tx - transactionId
 * @returns {AsyncReader}
 */
export function reset(code) {
  return ask(({ writeAction }) =>
    writeAction({
      contract: "PN1UdRoELsWRulkWwmO6n_27d5lFPo4q8VCWvQw7U14",
      input: {
        function: "slash",
        code
      }
    })
  ).chain(lift);
}
