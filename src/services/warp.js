// @ts-nocheck
import { prop } from "ramda";
const { WarpFactory } = window.warp;

const warp = WarpFactory.forMainnet();

/**
 * @param {string} txId
 * @returns {Promise<any>}
 */
export function register(txId) {
  return warp.register(txId, "node2");
}

/**
 * @param {{srcTxId: string, initState: Record<string, any>, tags: {name:string, value: string}[]}} data
 * @returns {Promise<{contractTxId: string, srcTxId: string }>}
 */
export function deployContract({ srcTxId, initState, tags }) {
  return warp.createContract.deployFromSourceTx({
    wallet: "use_wallet",
    srcTxId,
    initState: JSON.stringify(initState),
    tags
  });
}

/**
 * @param {{contract: string, fn: string, input: Record<name, any>, tags?: {name:string, value: string}[]}}
 * @returns {Promise<{originalTxId: string}>}
 */
export function writeAction({ contract, input, tags }) {
  const options = tags ? { tags } : {};
  return warp.contract(contract).connect("use_wallet").writeInteraction(input, options);
}

export function getState(contract) {
  // return fetch(`https://dre-1.warp.cc/contract?id=${contract}`)
  //   .then((res) => res.json())
  //   .then(prop("state"));
  return warp
    .contract(contract)
    .setEvaluationOptions({
      allowBigInt: true
    })
    .readState()
    .then((result) => result.cachedValue)
    .then((result) => result.state);
}
