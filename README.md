# Ream

Decentrantralized Autonomous Organization (DAOs) as they are have large amount of funds handled and it appears super  important to implement bookkeeping practices and management system. This case study brought about the development of Ream.

The  smart contract development of this project demonstrates an Hardhat use case. It contains a ream and reamfactory contract, a test for that contract, a  script that deploys that contract.

# Break Down

1. The dapp presents a landing page that gives an overview of the site
2. The create link, helps a dao admin, create a new treasury acount
3. This account gives the admin access to send, deposit, track receipt and payment
4. The receipt link on the dashboard displays the total receipts of the dao. It is populated by listening to an event emmited by the smart contract on deposit or receipt of funds
5. The payment link on the dashboard displays the total payment of the dao. It is populated by listening to an event emmited by the smart contract when funds are transferred out.
6. The sendfund link on the dashboard enable dao send out funds to their respective recipients.
7. The investment link is still a work-in-progress.

Try running some of the following tasks:

```shell
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.ts --network polygon
```

The dapp can be tested out here https://myream.vercel.app


