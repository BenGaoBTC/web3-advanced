# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
# 🧠 Web3 Advanced Learning Project

A professional **Hardhat + TypeScript** environment for learning Solidity, gas optimization, and automated testing.

> 👨‍💻 Author: Ben (Gaofeng)  
> 🧩 Goal: Build a deep understanding of how smart contracts execute on EVM, from storage to gas cost.

---

## 📘 Description

This repository contains my personal Web3 learning environment.  
It focuses on understanding **Solidity’s data-location mechanisms** and building an **end-to-end automation loop**:

Compile → Deploy → Run Tests → Verify Gas Usage

yaml
Copy code

It is both a learning notebook and a base template for future Solidity projects.

---

## ⚙️ Project Structure

web3-advanced/
├── contracts/
│ └── DataLocation.sol # Demonstrates storage / memory / calldata
├── scripts/
│ └── deployAndTest.ts # Deploy + run functional tests automatically
├── test/
│ └── DataLocation.test.ts # Chai + Hardhat unit test
├── hardhat.config.ts # Hardhat + TypeScript configuration
├── package.json
└── README.md

yaml
Copy code

---

## 🚀 Quick Start

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Compile Contracts
bash
Copy code
npx hardhat compile
3️⃣ Run Local Deploy + Test
bash
Copy code
npx hardhat run scripts/deployAndTest.ts
Expected output:

sql
Copy code
🚀 Starting deployment...
✅ Contract deployed at: 0x5FbDB2315678afecb367f032d93F642f64180aa3
🧪 Running post-deployment tests...
✅ All functional tests passed!
4️⃣ Run Hardhat Unit Tests
bash
Copy code
npx hardhat test
📚 What I’ve Learned So Far
Difference between storage, memory, calldata

How gas cost changes with data location

Hardhat workflow (compile → deploy → test)

Writing TypeScript scripts for automation

💡 Next Steps
 Write SecureBank.sol using mapping + modifier + payable

 Experiment with gas measurement

 Deploy to Sepolia testnet (via .env credentials)

 Add ESLint / Prettier for code quality

🛠️ Tech Stack
Solidity 0.8.20

Hardhat 2.22.x

TypeScript

Chai + Ethers.js

🧩 License
MIT License © 2025 Ben (Gaofeng)
