import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const getEnvParam = (key: string) => process.env[key];
const transformArray = (privateKeys: string | undefined) => {
  if (!privateKeys) return;
  return privateKeys.split(",");
};

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: getEnvParam("SEPOLIA_NODE_URL"),
      accounts: transformArray(getEnvParam("SEPOLIA_PRIVATE_KEY")),
    },

    mumbai: {
      url: getEnvParam("MUMBAI_NODE_URL"),
      accounts: transformArray(getEnvParam("MUMBAI_PRIVATE_KEY")),
    },

    bsctestnet: {
      url: getEnvParam("BSC_TESTNET_NODE_URL"),
      accounts: transformArray(getEnvParam("BSC_TESTNET_PRIVATE_KEY")),
    },
  },
  gasReporter: {
    enabled: getEnvParam("REPORT_GAS") === "true",
  },
};

export default config;
