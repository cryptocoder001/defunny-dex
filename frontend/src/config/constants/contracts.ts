import { ChainId } from '@pancakeswap/sdk'

export default {
  networkId: process.env.REACT_APP_CHAIN_ID,
  masterChef: {
    [ChainId.TESTNET]: process.env.REACT_APP_MASTERCHEF,
    [ChainId.MAINNET]: process.env.REACT_APP_MASTERCHEF,
  },
  sousChef: {
    [ChainId.TESTNET]: process.env.REACT_APP_SOUSCHEF,
    [ChainId.MAINNET]: process.env.REACT_APP_SOUSCHEF,
  },
  lotteryV2: {
    [ChainId.TESTNET]: process.env.REACT_APP_LOTTERY,
    [ChainId.MAINNET]: process.env.REACT_APP_LOTTERY,
  },
  multiCall: {
    [ChainId.TESTNET]: process.env.REACT_APP_MULTICALL,
    [ChainId.MAINNET]: process.env.REACT_APP_MULTICALL,
  },
  pancakeProfile: {
    [ChainId.TESTNET]: process.env.REACT_APP_PANCAKEPROFILE,
    [ChainId.MAINNET]: process.env.REACT_APP_PANCAKEPROFILE,
  },
  pancakeRabbits: {
    [ChainId.TESTNET]: process.env.REACT_APP_PANCAKERABBITS,
    [ChainId.MAINNET]: process.env.REACT_APP_PANCAKERABBITS,
  },
  bunnyFactory: {
    [ChainId.TESTNET]: process.env.REACT_APP_BUNNYFACTORY,
    [ChainId.MAINNET]: process.env.REACT_APP_BUNNYFACTORY,
  },
  claimRefund: {
    [ChainId.TESTNET]: process.env.REACT_APP_CLAIMREFUND,
    [ChainId.MAINNET]: process.env.REACT_APP_CLAIMREFUND,
  },
  pointCenterIfo: {
    [ChainId.TESTNET]: process.env.REACT_APP_POINTCENTERIFO,
    [ChainId.MAINNET]: process.env.REACT_APP_POINTCENTERIFO,
  },
  bunnySpecial: {
    [ChainId.TESTNET]: process.env.REACT_APP_BUNNYSPECIAL,
    [ChainId.MAINNET]: process.env.REACT_APP_BUNNYSPECIAL,
  },
  tradingCompetition: {
    [ChainId.TESTNET]: process.env.REACT_APP_TRADINGCOMPETITION,
    [ChainId.MAINNET]: process.env.REACT_APP_TRADINGCOMPETITION,
  },
  easterNft: {
    [ChainId.TESTNET]: process.env.REACT_APP_EASERNFT,
    [ChainId.MAINNET]: process.env.REACT_APP_EASERNFT,
  },
  cakeVault: {
    [ChainId.TESTNET]: process.env.REACT_APP_CAKEFAULT,
    [ChainId.MAINNET]: process.env.REACT_APP_CAKEFAULT,
  },
  predictions: {
    [ChainId.TESTNET]: process.env.REACT_APP_PREDICTIONS,
    [ChainId.MAINNET]: process.env.REACT_APP_PREDICTIONS,
  },
  chainlinkOracle: {
    [ChainId.TESTNET]: process.env.REACT_APP_CHAINLINKORACLE,
    [ChainId.MAINNET]: process.env.REACT_APP_CHAINLINKORACLE,
  },
  bunnySpecialCakeVault: {
    [ChainId.TESTNET]: process.env.REACT_APP_BUNNYSPECIALCAKEFAULT,
    [ChainId.MAINNET]: process.env.REACT_APP_BUNNYSPECIALCAKEFAULT,
  },
  bunnySpecialPrediction: {
    [ChainId.TESTNET]: process.env.REACT_APP_BUNNYSPECIALPREDICTION,
    [ChainId.MAINNET]: process.env.REACT_APP_BUNNYSPECIALPREDICTION,
  },

  // tokens

  wbnb: {
    [ChainId.TESTNET]: process.env.REACT_APP_WBNB,
    [ChainId.MAINNET]: process.env.REACT_APP_WBNB,
  },
  busd: {
    [ChainId.TESTNET]: process.env.REACT_APP_BUSD,
    [ChainId.MAINNET]: process.env.REACT_APP_BUSD,
  },
  cake: {
    [ChainId.TESTNET]: process.env.REACT_APP_CAKE,
    [ChainId.MAINNET]: process.env.REACT_APP_CAKE,
  },
  syrup: {
    [ChainId.TESTNET]: process.env.REACT_APP_SYRUP,
    [ChainId.MAINNET]: process.env.REACT_APP_SYRUP,
  },
  bnbCakeLp: {
    [ChainId.TESTNET]: process.env.REACT_APP_BNBCAKELP,
    [ChainId.MAINNET]: process.env.REACT_APP_BNBCAKELP,
  },
  bnbBusdLp: {
    [ChainId.TESTNET]: process.env.REACT_APP_BNBBUSDLP,
    [ChainId.MAINNET]: process.env.REACT_APP_BNBBUSDLP,
  }
}
