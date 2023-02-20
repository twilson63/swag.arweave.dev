import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { register } from "./register.js";

const { test } = Deno;

function dispatch({ data, tags }) {
  return Promise.resolve({ ok: true });
}

test("Register Player", async () => {
  const result = await register({
    "address": "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    "handle": "rakis",
    "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    "bio": "Permaweb Developer",
  }).runWith({ dispatch }).toPromise();
  console.log(result);
  assert(result.ok);
});
