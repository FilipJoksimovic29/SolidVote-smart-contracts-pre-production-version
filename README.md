# Ovo je kod pametnih ugovora SolidVote aplikacije, aplicaciju mozete probati na  https://solidvotedapp.com/SolidVote , dok se dodatne informacije o samoj aplikaciji i problemu koji resava nalaze na https://solidvotedapp.com
 Trenutno je na Base sepolia testnet-u, i u procesu je testiranja , sve sugestije su dobrodosle na office@solidvotedapp.com
# Ovaj kod nije kod za produkciju i kao takvog odricem se bilo kakve odogovornisti.

Kod je napisan u solidity jeziku i kompaktibilan je sa mrezama koje podrzavaju EVM poput Base, Avalanche, Arbitrum, Polygon..
Trenutno se u fajlovima nalaze skripte za kacenje ugovora na Ethereum Sepolia testnet i Base sepolia testnet, a hardhat je trenutno konfigurisan za base testnet i mainnet

U .env je potrebno dodati private key u WALLET_KEY= 

Kacenje ugovora bi trebalo da ide po sledecem redu:
Prvo ugovor za token, nakon toga njegovu adresu treba uneti unutar skripte za kacenje factory ugovora pod nazivom "voting_factory". 
Drugi po redu je factory koji dalje kreira instance voting ugovora kada se korisnik prvi put uloguje i zeli da zapocne svoju sesiju.

Ovde je samo ukratno objasnjeno, dalje se adrese ugovora i abi unose u frontend deo aplikacije, ili za one koji zeli da se igraju sa logikom ugovora mogu je testirati na  Remix-u. 
Kod ima dosta prostora za poboljsanja, npr. za factory je zbog velicine koriscen hardhat optimiser, a uz dodatnu optimizaciju, ne bi bilo potrebe...

# ENG 

# This is the smart contract code for the SolidVote application. You can try the app at https://solidvotedapp.com/SolidVote, and additional information about the application and the problem it solves can be found at https://solidvotedapp.com.
Currently, it is on the Base Sepolia testnet and is in the testing phase. Any suggestions are welcome at office@solidvotedapp.com.

# This code is not production-ready, and as such, I disclaim any responsibility.

The code is written in Solidity and is compatible with EVM-supported networks such as Base, Avalanche, Arbitrum, Polygon, etc.
Currently, the files include scripts for deploying contracts on the Ethereum Sepolia testnet and Base Sepolia testnet, with Hardhat currently configured for the Base testnet and mainnet.

In the .env file, you need to add the private key using WALLET_KEY=.

The contract deployment should follow this order:

First, deploy the token contract, then input its address into the script for deploying the factory contract named "voting_factory".
Next, deploy the factory, which subsequently creates instances of the voting contract whenever a user logs in for the first time and wishes to start their session.
This is just a brief explanation. Contract addresses and ABIs are then added to the frontend part of the application. Alternatively, for those who want to experiment with contract logic, it can be tested on Remix.
There is plenty of room for improvement in the code. For example, the factory uses the Hardhat optimizer due to its size. With further optimization, this wouldn't be necessary...
