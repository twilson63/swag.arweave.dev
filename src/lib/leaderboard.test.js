import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { leaderboard } from './leaderboard.js'

const { test } = Deno

test('Get Leaderboard', async () => {
  assertEquals(await leaderboard(), [])
})