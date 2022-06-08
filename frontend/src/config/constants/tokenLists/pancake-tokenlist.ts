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
      "name": "BUSD Token",
      "symbol": "BUSD",
      "address": `${String(ContractAddress.busd[ContractAddress.networkId])}`,
      "chainId": Number(ContractAddress.networkId),
      "decimals": 18,
      "logoURI": "https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"
    },
    {
      "name": "PancakeSwap Token",
      "symbol": "CAKE",
      "address": `${String(ContractAddress.cake[ContractAddress.networkId])}`,
      "chainId": Number(ContractAddress.networkId),
      "decimals": 18,
      "logoURI": "/images/fantom.jpg"
    },
    {
      "name": "Syrup Token",
      "symbol": "SYRUP",
      "address": `${String(ContractAddress.syrup[ContractAddress.networkId])}`,
      "chainId": Number(ContractAddress.networkId),
      "decimals": 18,
      "logoURI": "/images/fantom.jpg"
    }
  ]
}