// Import the Hardhat Runtime Environment (HRE), which gives access to all Hardhat functionalities
const hre = require("hardhat");

// Define the main function which will be executed to deploy the contract
async function main() {

  // Get the contract factory for the "LandTransferSystem" contract.
  // A contract factory is used to deploy new instances of a contract.
  const LandTransferSystem = await hre.ethers.getContractFactory("LandTransferSystem");
  
  // Deploy the contract to the blockchain. This returns a contract object.
  const contract = await LandTransferSystem.deploy();

  // Log the transaction hash of the deployment transaction for reference.
  console.log("Deployment transaction hash:", contract.deploymentTransaction().hash);
  
  // Wait for the contract deployment to be mined (confirmed on the blockchain).
  await contract.waitForDeployment();
  
  // Get the address where the contract is deployed on the blockchain.
  const deployedAddress = await contract.getAddress();

  // Log the deployed contract's address.
  console.log("Deployed to:", deployedAddress);
  
  // Return the deployed address — can be used programmatically if this function is imported.
  return deployedAddress; // Useful for verification
}

// Execute the main function, and catch any errors that occur during deployment.
main().catch((error) => {
  // Log the error to the console
  console.error(error);
  // Set a non-zero exit code to indicate failure
  process.exitCode = 1;
});
