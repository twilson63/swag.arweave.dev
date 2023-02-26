// @ts-nocheck
const { WarpFactory, LoggerFactory } = window.warp;

LoggerFactory.INST.logLevel("fatal");
const warp = WarpFactory.forMainnet();

const arweave = window.location
  ? import.meta.env.MODE === "development"
    ? window.Arweave.init({ host: "arweave.net", port: 443, protocol: "https" })
    : window.Arweave.init({})
  : window.Arweave.init({ host: "arweave.net", port: 443, protocol: "https" });

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
export async function writeAction({ contract, input, tags }) {
  try {
    const _tx = await arweave.createTransaction({ data: "swag" });
    _tx.addTag("App-Name", "SmartWeaveAction");
    _tx.addTag("App-Version", "0.3.0");
    _tx.addTag("Contract", contract);
    _tx.addTag("Input", JSON.stringify(input));
    await arweave.transactions.sign(_tx);
    return fetch("https://gateway.warp.cc/gateway/sequencer/register", {
      method: "POST",
      body: JSON.stringify(_tx),
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then((res) => res.json());
  } catch (e) {
    const options = tags ? { tags } : {};
    return warp.contract(contract).connect("use_wallet").writeInteraction(input, options);
  }
}

export async function getState(contract) {
  console.time("warp");
  await warp.contract(contract).syncState("https://dre-1.warp.cc/contract", { validity: true });

  return warp
    .contract(contract)
    .setEvaluationOptions({
      allowBigInt: true
    })
    .readState()
    .then((result) => result.cachedValue)
    .then((result) => result.state)
    .then((r) => (console.timeEnd("warp"), r));
}
