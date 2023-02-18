import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { playerStampStats } from "./player-stamp-stats.js";

const { test } = Deno;

test("get player stamp stats by tx", async () => {
  const p = await playerStampStats(
    "9x24zjvs9DA5zAz2DmqBWAg6XcxrrE-8w3EkpwRm4e4"
  );
  assertEquals(typeof p, "number");
});
