const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  const tokenAddress = '';

  const feeAmount = ethers.parseUnits('10', 18); 

  const VotingFactory = await ethers.getContractFactory('VotingFactory', deployer);
  const votingFactory = await VotingFactory.deploy(tokenAddress, feeAmount);

  await votingFactory.waitForDeployment();

  console.log('VotingFactory deployed to:', votingFactory.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
