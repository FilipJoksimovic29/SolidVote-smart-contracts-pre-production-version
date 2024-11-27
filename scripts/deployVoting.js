const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    // Pretpostavlja se da je token već deployan i da imate njegovu adresu
    const tokenAddress = ""; 

    const Token = await ethers.getContractAt("ERC20Burnable", tokenAddress, deployer);

    const feeAmount = ethers.utils.parseUnits("10", "ether"); // Iznos takse za spaljivanje tokena

    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(
        deployer.address,       
        1,                     
        deployer.address,       
        Token.address,           
        feeAmount               
    );

    await voting.deployed();

    console.log("Voting deployed to:", voting.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});