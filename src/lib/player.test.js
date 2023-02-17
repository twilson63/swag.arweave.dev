import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { player } from './player.js'

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

test('get player by qr id', async () => {
  const p = await player(1).runWith({query, get}).toPromise()
  assertEquals(p, {
    handle: 'rakis'
  })
})
