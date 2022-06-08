import { ChainId } from '@pancakeswap/sdk';
import tokens from './tokens';
import { FarmConfig } from './types';
import ContractAddress from './contracts';

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
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
  }
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

]

export default farms
