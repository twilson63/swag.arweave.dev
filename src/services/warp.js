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
export async function deployContract({ srcTxId, initState, tags }) {
  const _tx = await arweave.createTransaction({ data: "swag" });
  tags.map((t) => _tx.addTag(t.name, t.value));
  _tx.addTag("Content-Type", "text/plain");
  _tx.addTag("App-Name", "SmartWeaveContract");
  _tx.addTag("App-Version", "0.3.0");
  _tx.addTag("Contract-Src", srcTxId);
  _tx.addTag("Init-State", JSON.stringify(initState));
  const result = await window.arweaveWallet.dispatch(_tx);
  //await new Promise((resolve) => setTimeout(resolve, 1500))
  //await warp.register(result.id, 'node2')
  await fetch("https://gateway.warp.cc/gateway/contracts/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ id: result.id, bundlrNode: "node2" })
  });
  //await new Promise((resolve) => setTimeout(resolve, 1500))
  return { contractTxId: result.id };
  /*
  return warp.createContract.deployFromSourceTx({
    wallet: "use_wallet",
    srcTxId,
    initState: JSON.stringify(initState),
    tags
  });
  */
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
