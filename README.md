# Ovo je kod pametnih ugovora SolidVote aplikacije, aplicaciju mozete probati na  https://solidvotedapp.com/SolidVote , dok se dodatne informacije o samoj aplikaciji i problemu koji resava nalaze na https://solidvotedapp.com
 Trenutno je na Base sepolia testnet-u, i u procesu je testiranja , sve sugestije su dobrodosle na office@solidvotedapp.com
# Ovaj kod nije kod za produkciju i kao takvog odricem se bilo kakve odogovornisti.

Kod je napisan u solidity jeziku i kao takav kompaktibilan je sa mrezama koje podrzavaju EVM poput Base, Avalanche, Arbitrum, Polygon..
Trenutno se u fajlovima nalaze skripte za kacenje ugovora na Ethereum Sepolia testnet i Base sepolia testnet, a hardhat je trenutno konfigurisan za base testnet i mainnet

U .env je potrebno dodati private key u WALLET_KEY= 

Kacenje ugovora bi trebalo da ide po sledecem redu:
Prvo ugovor za token, nakon toga njegovu adresu treba uneti unutar skripte za kacenje factory ugovora pod nazivom "voting_factory". 
Drugi po redu je factory koji dalje kreira instance voting ugovora kada se korisnik prvi put uloguje i zeli da zapocne svoju sesiju.

Ovde je samo ukratno objasnjeno, dalje se adrese ugovora i abi unose u frontend deo aplikacije, ili za one koji zeli da se igraju sa logikom ugovora mogu je testirati na  Remix-u. 
Kod ima dosta prostora za poboljsanja, npr. za factory je zbog velicine koriscen hardhat optimiser, a uz dodatnu optimizaciju, ne bi bilo potrebe...

