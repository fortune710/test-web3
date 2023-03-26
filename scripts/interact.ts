import { ethers } from "hardhat"

const contract = require('../artifacts/contracts/First.sol/First.json')
const API_KEY = process.env.ALCHEMY_KEY
const CONTRACT_ADDRESS = process.env.ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY

//console.log(JSON.stringify(contract.abi))
//First of all create the provider, which gives access to read and write from blockchain
const provider = new ethers.providers.AlchemyProvider("goerli", API_KEY);

//Then create the signer, which is the wallet that will handle transactions
const signer = new ethers.Wallet(PRIVATE_KEY as string, provider)

//Then create the contract instance that we would be using
const FirstContract = new ethers.Contract(CONTRACT_ADDRESS as string, contract.abi, signer)

async function main() {
    const number = await FirstContract.number();
    console.log("The number is", number);

    console.log("Time to update the number...");
    const anotherInstance = await FirstContract.updateNumber(10);
    await anotherInstance.wait();

    const newNumber = await FirstContract.number();
    console.log("The new number is", newNumber);
}

main();