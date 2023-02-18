import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { profile } from './profile.js'

const { test } = Deno

const query = () => Promise.resolve({
  data: {
    transactions: {
      edges: [{
        node: {
          id: '1234'
        }
      }]
    }
  }
})

const get = (id) => Promise.resolve({
  handle: 'rakis'
})

test('get profile by address', async () => {
  const p = await profile("vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI").runWith({ query, get }).toPromise()
  assertEquals(p, {
    handle: 'rakis'
  })
})
