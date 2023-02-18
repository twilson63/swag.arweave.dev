import crocks from 'crocks'
import { compose, pluck, path, head, prop } from 'ramda'

const { Async, ReaderT } = crocks
const { of, ask, lift } = ReaderT(Async)

export function profile(address) {
  return of(address)
    .map(buildQuery)
    .chain(gql =>
      ask(({ query, get }) => Async.fromPromise(query)(gql)
        .map(compose(
          pluck('node'),
          path(['data', 'transactions', 'edges'])
        ))
        .map(head)
        .map(prop('id'))
        .chain(tx => Async.fromPromise(get)(tx))
      )).chain(lift)
}

function buildQuery(address) {
  return {
    query: `query ($owners: [String!]) {
transactions(
  owners: $owners,
  tags: [
    {name: "Protocol-Name", values: ["Account-0.3"]},
    {name: "App-Name", values: ["SmartWeaveContract"]}
  ]
) {
  edges {
    node {
      id
    }
  }
}
  }`,
    variables: { "owners": [address] }
  }
}