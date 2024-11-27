require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

const { WALLET_KEY } = process.env;

module.exports = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200 
      }}
  },
  defaultNetwork: 'hardhat',
  networks: {
    'base-mainnet': {
      url: 'https://mainnet.base.org',
      accounts: [WALLET_KEY],
      gasPrice: 1000000000,
    },
    'base-sepolia': {
      url: 'https://sepolia.base.org',
      accounts: [WALLET_KEY],
      gasPrice: 1000000000,
    },
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [WALLET_KEY],
      gasPrice: 1000000000,
    },
  },
};
