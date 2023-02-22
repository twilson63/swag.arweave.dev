/* global Deno */
import { assert } from "asserts";
import { validate } from "./model.js";

const { test } = Deno;

test("validate player", async () => {
  await validate({
    address: "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    handle: "rakis",
    avatar: "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    bio: "A developer who likes to build things forever"
  });

  assert(true);
});
