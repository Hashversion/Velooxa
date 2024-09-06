/* eslint-disable prettier/prettier */
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy the YourContract contract
  await deploy("YourContract", {
    from: deployer,
    log: true,
    autoMine: true, // Can be used for local network to speed up deployment
  });

  // Get the deployed contract to interact with it after deploying.
  const YourContract: Contract = await hre.ethers.getContract<Contract>("YourContract", deployer);
  console.log("🚗 YourContract deployed at:", YourContract.address);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];