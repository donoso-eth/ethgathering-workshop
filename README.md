# Tradeable Cashflow

This example provides the deployer with an NFT. Whoever is the owner
of the NFT will receive a consolidated stream for all the streams the contract
receives.

## Installation

In this directory, run the following depending on your node package manager.

```bash
# yarn
yarn

# npm
npm i
```

## Redirect All

The [redirect all contract](./contracts/RedirectAll.sol) contains the super app
logic that can "react" to the creation, updating, and deletion of a stream via
a callback. These callbacks redirect any incoming stream to a given receiver's
address.

## Tradeable Cash Flow

The [tradable cashflow contract](./contracts/TradeableCashflow.sol) contains
ERC721 NFT logic, inheriting Open Zeppelin's implementations. It also inherits
the `RedirectAll.sol` logic. In this implementation, the receiver of the stream
is changed on-transfer through the Open Zeppelin ERC721 `_beforeTransfer` hook.

## Compile
```yarn build``` or ```npx hardhat compile```

## verify 
```npx hardhat verify --constructor-args arguments.js  --network goerli 0x2533b505b4a60EA32ea606BF623aDBE949a0E19E```
