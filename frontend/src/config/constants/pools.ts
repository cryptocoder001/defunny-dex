import { ChainId } from '@pancakeswap/sdk';
import tokens from './tokens';
import { PoolConfig, PoolCategory } from './types';
import ContractAddress from './contracts';

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      [ChainId.MAINNET]: String(ContractAddress.masterChef[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.masterChef[ChainId.TESTNET]),
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
