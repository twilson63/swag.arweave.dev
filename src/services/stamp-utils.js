import Stamps from "@permaweb/stampjs";
import { prop } from "ramda";

const { WarpFactory } = window.warp;

const arweave = window.location
  ? import.meta.env.MODE === "development"
    ? window.Arweave.init({ host: "arweave.net", port: 443, protocol: "https" })
    : window.Arweave.init({})
  : window.Arweave.init({ host: "arweave.net", port: 443, protocol: "https" });

const warp = WarpFactory.forMainnet();
const stamps = Stamps.init({ warp });

export async function stamp(tx) {
  try {
    const _tx = await arweave.createTransaction({ data: "stamp" });
    _tx.addTag("App-Name", "SmartWeaveAction");
    _tx.addTag("App-Version", "0.3.0");
    _tx.addTag("Contract", "61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI");
    _tx.addTag(
      "Input",
      JSON.stringify({
        function: "stamp",
        transactionId: tx,
        timestamp: Date.now()
      })
    );
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
    return stamps.stamp(tx);
  }
}

export function count(tx) {
  return stamps.count(tx).then(prop("total"));
}

export function filter(logic) {
  return stamps.filter(logic);
}
