import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { stamp } from './stamp.js'

const { test } = Deno

function _stamp(tx) {
  return Promise.resolve({ ok: true })
}

test('Register Player', async () => {
  const result = await stamp("fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI")
    .runWith({ stamp: _stamp }).toPromise()

  assert(result.ok)
})