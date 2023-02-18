import { prop } from 'ramda'

const arweave = window.Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' })

export default (tx) => arweave.api.get(tx).then(prop('data'))