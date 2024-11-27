const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying SolidVoteToken with the account:', deployer.address);
  console.log('Account balance:', (await ethers.provider.getBalance(deployer.address)).toString());

  const SolidVoteToken = await ethers.getContractFactory('SolidVoteToken', deployer);
  const solidVoteToken = await SolidVoteToken.deploy();

  await solidVoteToken.waitForDeployment();

  console.log('SolidVoteToken deployed to:', solidVoteToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
