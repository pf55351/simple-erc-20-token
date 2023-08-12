import { ethers } from "hardhat";

async function main() {
  const name = "MULTISEND TOKEN";
  const symbol = "MULTI";
  const initialSupply = ethers.parseEther("1000000000");
  const simpleErc20Token = await ethers.deployContract("SimpleErc20Token", [
    name,
    symbol,
    initialSupply,
  ]);

  await simpleErc20Token.waitForDeployment();

  console.log("Deployed with address:", await simpleErc20Token.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
