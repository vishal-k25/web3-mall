// require('babel-register')
// require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.SECRET_KEY, process.env.ENDPOINT_URL),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/shared/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
    },
  },
}
