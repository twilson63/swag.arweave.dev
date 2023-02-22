import { test, expect } from 'vitest'
import { interpret } from 'robot3'

import { WarpFactory } from 'warp-contracts'
import Arweave from 'arweave'

globalThis.window = {
  warp: {
    WarpFactory: {
      forMainnet() {
        return {
          syncState: () => Promise.resolve(null),
          contract() {
            return {
              setEvaluationOptions: () => ({
                readState() {
                  return {
                    stamps: {}
                  }
                }
              })
            }
          }
          
        }
      }
    }
  },
  Arweave: {
    init() {
      return {
        api: {
          get: (tx) => {
            return Promise.resolve({
              data: JSON.stringify({id: tx })
            })
          },
          post: (m) => {
            if (m === 'graphql') {
              return Promise.resolve({
                data: {
                  data: {
                    transactions: {
                      edges: [

                      ]
                    }
                  }
                }
              })
            }
          }
        }
      }
    }
  }
}

test('ok', async () => {
  const machine = (await import('./machine.js')).default
  const service = interpret(machine, (x) => null)
  expect(service.machine.current).toBe('loading')
  await new Promise((resolve) => setTimeout(resolve, 500))
  console.log('context', service.context)
  expect(service.machine.current).toBe('leaderboard')
  /*
  await service.send({type: 'show', id: '1'})
  await new Promise((resolve) => setTimeout(resolve, 500))
  expect(service.machine.current).toBe('player')
  */
})