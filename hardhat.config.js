
require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    ethereum: {
      url: "https://main-light.eth.linkpool.io/",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    },
    bsc: {
      url: "https://bsc-dataseed1.ninicoin.io/",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    },
    matic: {
      url: "https://rpc-mainnet.matic.quiknode.pro",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    },
    fantom: {
      url: "https://rpc.ftm.tools/",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    },
    fantom_test: {
      url: "https://rpc.testnet.fantom.network",
      accounts: [process.env.PRIVATEKEY]
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    },
    avalanche_test: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATEKEY, process.env.PRIVATEKEY]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: "WQKQ9RXXCTK715PKG1H7JUMV4ZEUW3KKXN"
    apiKey: {
      ftmTestnet: "7TBMMEYF9U526AZ5XBU44MDQWZWCMF52TM"
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
    ]
  },
  mocha: {
    timeout: 200000
  }
};
