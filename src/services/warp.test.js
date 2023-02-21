// @ts-nocheck
import { assert } from "asserts";

window.warp = {
  WarpFactory: {
    forMainnet() {
      return {
        createContract: {
          deployFromSourceTx() {
            return Promise.resolve({contractTxId: '1', srcTxId: '2' })
          }
        },
        contract() {
          return {
            writeInteraction() {
              return Promise.resolve({originalTxId: '3'})
            }
          }
        }
      }
    }
  }
};

const { test } = Deno;

test('deployContract', async () => {
  const { deployContract } = await import('./warp.js')
  const result = await deployContract({
    srcTxId: '2',
    initState: {name: 'test'},
    tags: [{name: 'Title', value: 'Test Contract'}]
  })
  assert(result.contractTxId === '1')
})

test('writeAction', async () => {
  const { writeAction } = await import('./warp.js')
  const result = await writeAction({
    contract: '1',
    input: {
      function: 'register',
      token: '2'
    }
  })
  assert(result.originalTxId === '3')
})