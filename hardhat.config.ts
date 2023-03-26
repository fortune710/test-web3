import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.API_KEY,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
  }
};

export default config;
