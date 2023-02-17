import { assert } from 'https://deno.land/std/testing/asserts.ts'
import get from './get.js'

const { test } = Deno

test('get tx data from arweave', async () => {
  const data = await get('O48r5xi5Vlvu4hNIZeO45PDQf-B36vQ-4vSX65t9Tfw')
  console.log(data.data)
  assert(true)
})
