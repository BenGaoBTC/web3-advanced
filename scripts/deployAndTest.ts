import { ethers } from "hardhat";

/**
 * Deploys the DataLocation contract and runs functional tests immediately.
 * This acts as an integration test to verify behavior post-deployment.
 */
async function main() {
  console.log("🚀 Starting deployment...");

  // 1️⃣ Deploy the contract
  const DataLocation = await ethers.getContractFactory("DataLocation");
  const contract = await DataLocation.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`✅ Contract deployed at: ${address}`);

  // 2️⃣ Run assertions directly
  console.log("🧪 Running post-deployment tests...");

  // check initial storage value
  const stored = await contract.stored();
  if (stored !== "Hello storage") {
    throw new Error(`❌ Unexpected stored value: ${stored}`);
  }

  // call changeMemory()
  const result = await contract.changeMemory("temp");
  if (result !== "Modified memory") {
    throw new Error(`❌ changeMemory failed: ${result}`);
  }

  // call changeStorage()
  const tx = await contract.changeStorage();
  await tx.wait();
  const newStored = await contract.stored();
  if (newStored !== "Modified storage") {
    throw new Error(`❌ changeStorage failed, value is ${newStored}`);
  }

  console.log("✅ All functional tests passed!");
}

// Standard Hardhat execution pattern
main().catch((err) => {
  console.error("❌ Script failed:", err);
  process.exit(1);
});
