// @ts-nocheck
import { assert, assertEquals } from "asserts";
import { register } from "./register.js";
import { Async } from "./utils.js";

const { test } = Deno;

function deployContract() {
  return Async.Resolved({contractTxId: '1'})
}

function writeAction() {
  return Async.Resolved({originalTxId: '2'})
}

test("Register Player", async () => {
  const result = await register({
    "address": "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    "handle": "rakis",
    "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    "bio": "Permaweb Developer",
    "code": "1"
  }).runWith({ deployContract, writeAction }).toPromise();
  assert(result.ok);
});
