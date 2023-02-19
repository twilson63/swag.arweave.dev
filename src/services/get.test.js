import { assert } from "https://deno.land/std/testing/asserts.ts";
import Arweave from "arweave";
//import get from './get.js'

const { test } = Deno;

window.Arweave = Arweave;

test("get tx data from arweave", async () => {
  const get = (await import("./get.js")).default;
  const data = await get("O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw");
  assert(JSON.parse(data).handle === "rakis");
});
