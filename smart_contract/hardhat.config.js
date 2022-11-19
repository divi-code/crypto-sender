require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerliETH: {
      url: 'https://eth-goerli.g.alchemy.com/v2/wdbhc3IC6PvHJPqps2XPrD7sFG8WalH5',
      accounts: ['a5d81c5e2fc1365220a937c7d899eebed6ef8e362fbb51f6f7d91b583facac6b'],
    },
  },
};