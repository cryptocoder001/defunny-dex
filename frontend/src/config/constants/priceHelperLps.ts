import { ChainId } from '@pancakeswap/sdk';
import tokens from './tokens'
import { FarmConfig } from './types'
import ContractAddress from './contracts';

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      [ChainId.MAINNET]: String(ContractAddress.bnbCakeLp[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.bnbCakeLp[ChainId.TESTNET]),
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      [ChainId.MAINNET]: String(ContractAddress.bnbBusdLp[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.bnbBusdLp[ChainId.TESTNET]),
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default priceHelperLps
