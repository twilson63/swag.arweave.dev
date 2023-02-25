/* global Deno */
// @ts-nocheck
import { assert } from "asserts";
import { stamp } from "./stamp.js";
import { Async } from "./utils.js";

const { test } = Deno;

function _stamp() {
  return Async.Resolved({ ok: true });
}

test("Register Player", async () => {
  const result = await stamp("fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI")
    .runWith({ stamp: _stamp })
    .toPromise();

  assert(result.ok);
});
