import { assert } from "https://deno.land/std/testing/asserts.ts";
import warp from "warp-contracts";

warp.LoggerFactory.INST.logLevel("fatal");
window.warp = warp;

const { test } = Deno;

test("Get Stamp Count", async () => {
  const { count } = await import("./stamp-utils.js");

  const result = await count("M4sru2azaPEY-zOViXhCtfygFpvBy7C0ir8iOnrgRdA");
  assert(result === 25);
});
