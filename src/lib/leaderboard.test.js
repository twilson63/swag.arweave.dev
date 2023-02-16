import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { leaderboard } from './leaderboard.js'

const { test } = Deno

test('Get Leaderboard', async () => {
  const players = await leaderboard()
  assertEquals(players.length, 7)
})