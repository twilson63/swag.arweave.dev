import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { register } from './register.js'

const { test } = Deno

function dispatch({ data, tags }) {
  return Promise.resolve({ ok: true })
}

test('Register Player', async () => {
  const result = await register({
    "addr": "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI",
    "handle": "rakis",
    "avatar": "fYmFNZbRCbPhBWqmOJLNiJFoLFiFchIBSZNI6jRwWaI",
    "banner": "ar://a0ieiziq2JkYhWamlrUCHxrGYnHWUAMcONxRmfkWt-k",
    "name": "rakis",
    "bio": "Permaweb Developer",
    "links": {
      "twitter": "rakis_me",
      "github": "rakis-me",
      "discord": "tom-permapages#3217"
    },
    "wallets": {}
  }).runWith({ dispatch }).toPromise()

  assert(result.ok)
})