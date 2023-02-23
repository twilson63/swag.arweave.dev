/* global Deno */
// @ts-nocheck
import { assertEquals } from "asserts";
import { profile } from "./profile.js";
import crocks from "crocks";

const { Async } = crocks;
const { test } = Deno;

const query = () =>
  Async.Resolved({
    data: {
      transactions: {
        edges: [
          {
            node: {
              id: "1234"
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

test("get profile by address", async () => {
  const p = await profile("vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI")
    .runWith({ query, get })
    .toPromise();
  assertEquals(p, {
    handle: "rakis"
  });
});
