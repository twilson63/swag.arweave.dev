// @ts-nocheck
import { prop } from "ramda";

const parseJSON = (s) => JSON.parse(s);
const arweave = window.location
  ? import.meta.env.MODE === "development"
    ? window.Arweave.init({ host: "arweave.net", port: 443, protocol: "https" })
    : window.Arweave.init({})
  : window.Arweave.init({ host: "arweave.net", port: 443, protocol: "https" });

export async function dispatch({ data, tags }) {
  if (!window.arweaveWallet) {
    throw new Error("no wallet found!");
  }
  await window.arweaveWallet.connect(["DISPATCH"]);
  const tx = await arweave.createTransaction({ data });
  tags.forEach((t) => tx.addTag(t.name, t.value));
  return window.arweaveWallet.dispatch(tx);
}

export function query({ query, variables = {} }) {
  return arweave.api.post("graphql", { query, variables })
    .then(prop("data"));
}

export function get(tx) {
  return arweave.api.get(tx).then(prop("data")).then(parseJSON);
}

export function toArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.readAsArrayBuffer(file)
    fr.addEventListener('loadend', (evt) => {
      resolve(evt.target.result)
    })
  })
}

export function createTransaction(data) {
  return arweave.createTransaction({data})
}