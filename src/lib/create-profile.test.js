// @ts-nocheck
import { assert } from "asserts";
import { createProfile } from "./create-profile.js";
import { Async } from "./utils.js";

const { test } = Deno;

function dispatch() {
  return Async.Resolved({ id: "1234" });
}

test("create profile", async () => {
  const result = await createProfile({
    handle: "rakis",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    bio: "Permaweb Developer",
  }).runWith({ dispatch }).toPromise();
  assert(result.id === "1234");
});
