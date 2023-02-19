import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { player } from "./player.js";

const { test } = Deno;

const query = () =>
  Promise.resolve({
    data: {
      transactions: {
        edges: [{
          node: {
            id: "1234",
            owner: { address: '5436' },
            tags: [
              { name: 'Type', value: 'profile' },
              { name: 'Title', value: 'Rakis Profile' }
            ]
          },
        }],
      },
    },
  });

const get = (id) =>
  Promise.resolve({
    handle: "rakis",
  });

const filter = (x) => Promise.resolve([{ asset: '1', address: '2' }])

test("get player by qr id", async () => {
  const p = await player("1").runWith({ query, get, filter }).toPromise();
  assertEquals(p, {
    handle: "rakis",
    collected: [{ asset: "1", address: "2" }],
    given: [{ asset: "1", address: "2" }],
  });
});
