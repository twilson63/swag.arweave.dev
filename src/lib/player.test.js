/* global Deno */
// @ts-nocheck
import { assertEquals } from "asserts";
import { player } from "./player.js";
import { Async } from "./utils.js";

const { test } = Deno;

const query = () =>
  Async.Resolved({
    data: {
      transactions: {
        edges: [
          {
            node: {
              id: "1234",
              owner: { address: "5436" },
              tags: [
                { name: "Type", value: "profile" },
                { name: "Title", value: "Rakis Profile" }
              ]
            }
          }
        ]
      }
    }
  });

const get = (id) =>
  Async.Resolved({
    handle: "rakis"
  });

const filter = (x) => Async.Resolved([{ asset: "1", address: "2" }]);

test("get player by qr id", async () => {
  const p = await player("1").runWith({ query, get, filter }).toPromise();
  assertEquals(p, {
    handle: "rakis",
    collected: [{ asset: "1", address: "2" }],
    given: [{ asset: "1", address: "2" }]
  });
});
