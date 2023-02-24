/* global Deno */

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { leaderboard } from "./leaderboard.js";
import crocks from "crocks";

const { Async } = crocks;
const { test } = Deno;

const getState = () =>
  Async.Resolved({
    name: "TEST-CONF-2",
    creator: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    players: {
      2: {
        address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
        token: "nExRjXmtTfOS-XTvQQncgsJUKbZsxw5z8lszJFKtdLA",
        admin: false,
        code: "2",
        avatar: "_vB3l16qeA5d96IcbO7LzYZKm4Kjc8whUGHcXE4EpRM",
        handle: "stamper",
        bio: "stamp"
      },
      3: {
        address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
        token: "P45ep0-WxkyqV5pQoajy6d_fjM7iEfwTfPsNiNHdFlY",
        admin: false,
        code: "3",
        avatar: "2OCELP0bIa6r-0w15o6HG7mHHSiPdFJIlPypfpP1ME0",
        handle: "rakis",
        bio: "hello world"
      },
      4: {
        address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
        token: "dVwwxwGlMgC9HU9UMLPx_VHXd2VtXqX5RgasgjRk1j0",
        admin: false,
        code: "4",
        avatar: "ja9AR2loNEVGm5XkoIdeQXAg_uUHhzkNo9N3kE0FiS0",
        handle: "rakis",
        bio: "Hello World"
      },
      6: {
        address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
        token: "KDvyjsTHreVdofS2ZPcWyZjygdzBKKCOd-BaREb7DTY",
        admin: false,
        code: "6",
        avatar: "Gml5aY1DObIAICPLMby1-S0tgWTuyeB32RKoAm_YxJ4",
        handle: "rakis4",
        bio: "Test profile 4"
      }
    },
    canEvolve: true,
    description: "SWAG Stamper"
  });
const filter = () =>
  Async.Resolved([
    {
      asset: "1234",
      address: "333333"
    },
    {
      asset: "1234",
      address: "222222"
    },
    {
      asset: "1234",
      address: "333333"
    },
    {
      asset: "33333",
      address: "1234"
    }
  ]);

test("Get Leaderboard", async () => {
  const players = await leaderboard().runWith({ getState, filter }).toPromise();
  assertEquals(players.length, 4);
  assertEquals(players[0].collected, 0);
});
