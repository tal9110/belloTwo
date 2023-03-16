// https://eth-goerli.g.alchemy.com/v2/w8LKqJaRKnIL7ki-2QywEsgCIFhkBJ5H
// https://eth-mainnet.g.alchemy.com/v2/gEMPWsgWFJG_nDJrwgKUfhIAyLksThdu

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/gEMPWsgWFJG_nDJrwgKUfhIAyLksThdu",
      accounts: [`${process.env.ALCHEMY_ACCOUNT_NUMBER}`],
      gasPrice: 20000000000,
    },
  },
};
