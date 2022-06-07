import { ChainId } from '@pancakeswap/sdk';
import ContractAddress from '../contracts';

export default {
  "name": "PancakeSwap Default List",
  "timestamp": "2021-05-06T00:00:00Z",
  "version": {
    "major": 3,
    "minor": 0,
    "patch": 0
  },
  "tags": {},
  "logoURI": "/images/fantom.jpg",
  "keywords": [
    "pancake",
    "default"
  ],
  "tokens": [
    {
      "name": "WBNB Token",
      "symbol": "WBNB",
      "address": `${String(ContractAddress.wbnb[ContractAddress.networkId])}`,
      "chainId": Number(ContractAddress.networkId),
      "decimals": 18,
      "logoURI": "/images/fantom.jpg"
    },
    {
      "name": "PancakeSwap Token",
      "symbol": "CAKE",
      "address": "0x0A5b255816f636b4AE7aaFB40E5A61566f85deB5",
      "chainId": Number(ContractAddress.networkId),
      "decimals": 18,
      "logoURI": "/images/fantom.jpg"
    },
    {
      "name": "Syrup Token",
      "symbol": "SYRUP",
      "address": "0x6AcF579761C9B789BcEccC9EA113e6178943A16b",
      "chainId": Number(ContractAddress.networkId),
      "decimals": 18,
      "logoURI": "/images/fantom.jpg"
    }
  ]
}