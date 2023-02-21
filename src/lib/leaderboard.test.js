import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { leaderboard } from "./leaderboard.js";
import crocks from "crocks";

const { Async } = crocks;
const { test } = Deno;

function query() {
  return Async.Resolved({
    data: {
      transactions: {
        edges: [
          {
            node: {
              id: "1234",
              owner: { address: "43567" },
              tags: [
                { name: "Protocol-Name", value: "Account-0.3" },
                { name: "App-Name", value: "SmartWeaveContract" },
                { name: "SWAG-CODE", value: "1" },
                { name: "Type", value: "profile" },
                { name: "Title", value: "rakis" },
                { name: "Description", value: "Permaweb Developer" },
              ],
            },
          },
          {
            node: {
              id: "33333",
              owner: { address: "55555" },
              tags: [
                { name: "Protocol-Name", value: "Account-0.3" },
                { name: "App-Name", value: "SmartWeaveContract" },
                { name: "SWAG-CODE", value: "1" },
                { name: "Type", value: "profile" },
                { name: "Title", value: "dmac" },
                { name: "Description", value: "Permaweb Developer" },
              ],
            },
          },
        ],
      },
    },
  });
}

const filter = () =>
  Async.Resolved([{
    asset: "1234",
    address: "333333",
  }, {
    asset: "1234",
    address: "222222",
  }, {
    asset: "1234",
    address: "333333",
  }, {
    asset: "33333",
    address: "1234",
  }]);

test("Get Leaderboard", async () => {
  const players = await leaderboard().runWith({ query, filter }).toPromise();
  assertEquals(players.length, 2);
  assertEquals(players[0].collected, 3);
});
