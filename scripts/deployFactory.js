async function main() {
    const tokenAddress = ""; // Zamenite sa stvarnom adresom vašeg tokena
    const feeAmount = ethers.utils.parseUnits("10", "ether"); // 10 tokena
  
    const VotingFactory = await ethers.getContractFactory("VotingFactory");
    const votingFactory = await VotingFactory.deploy(tokenAddress, feeAmount);
  
    await votingFactory.deployed();
  
    console.log("VotingFactory deployed to:", votingFactory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  