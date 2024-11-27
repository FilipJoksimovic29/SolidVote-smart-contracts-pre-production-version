const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  const tokenAddress = ''; // adresa tokena
  const supremeAdministrator = deployer.address; 
  const owner = deployer.address;              
  const uniqueID = 1;                         
  const feeAmount = ethers.parseUnits('10', 18); //kolicina koja se spaljuje pokretanjem glasanja

  const Voting = await ethers.getContractFactory('Voting', deployer);
  const voting = await Voting.deploy(
    owner,
    uniqueID,
    supremeAdministrator,
    tokenAddress,
    feeAmount
  );

  await voting.waitForDeployment();

  console.log('Voting deployed to:', voting.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
