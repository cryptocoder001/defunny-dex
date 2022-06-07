import { ChainId } from '@pancakeswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://rpc.testnet.fantom.network',
  [ChainId.TESTNET]: 'https://rpc.testnet.fantom.network',
}

export default NETWORK_URLS
