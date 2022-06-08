import { ChainId, Token } from '@pancakeswap/sdk';
import ContractAddress from './contracts';

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    String(ContractAddress.cake[ChainId.MAINNET]),
    18,
    'CAKE',
    'PancakeSwap Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    String(ContractAddress.cake[ChainId.TESTNET]),
    18,
    'CAKE',
    'PancakeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    String(ContractAddress.busd[ChainId.MAINNET]),
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    String(ContractAddress.busd[ChainId.TESTNET]),
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, String(ContractAddress.wbnb[ChainId.MAINNET]), 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  cake: {
    symbol: 'CAKE',
    address: {
      [ChainId.MAINNET]: String(ContractAddress.cake[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.cake[ChainId.TESTNET]),
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      [ChainId.MAINNET]: String(ContractAddress.wbnb[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.wbnb[ChainId.TESTNET]),
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      [ChainId.MAINNET]: String(ContractAddress.busd[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.busd[ChainId.TESTNET]),
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      [ChainId.MAINNET]: String(ContractAddress.syrup[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.syrup[ChainId.TESTNET]),
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  }
}

export default tokens
