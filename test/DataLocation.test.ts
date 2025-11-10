import { expect } from "chai";
import { ethers } from "hardhat";

describe("DataLocation", function () {
  it("should modify memory but not storage", async function () {
    const DataLocation = await ethers.getContractFactory("DataLocation");
    const contract = await DataLocation.deploy();
    await contract.waitForDeployment();

    // Call changeMemory
    const result = await contract.changeMemory("original");
    expect(result).to.equal("Modified memory");

    // Verify storage variable remains unchanged
    const stored = await contract.stored();
    expect(stored).to.equal("Hello storage");
  });
});
