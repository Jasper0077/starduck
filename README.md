# Star Duck 
Starduck is an ERC-721 Token demo project for self-educational purpose.

## Prerequisites
  * Truffle Suite
  * Open Zeppelin
  * OpenSea
  * Infura
  * Pinnata
  * IPFS
  * Meta Mask

## How to setup your own one?

Open up your terminal, in your project `root` directory, initialize your project with the following command:

```
npm init -y
```

If this is your first time using [Truffle](https://trufflesuite.com/docs/truffle/quickstart.html), run the following command to install or update:

***Note that, we normally install it globally.***

```
npm i -g truffle
```

We are going to install OpenZeppelin by running this command:

```
npm i --save @openzeppelin/contracts
```

Then, you will notice after like in the `node_modules/` folder, after installation.

```
📦node_modules
 ┣ 📂@openzeppelin
 ┃ ┗ 📂contracts
 ┗ 📜.package-lock.json
```

We can setup a `React` truffle template by using (optional):

```
truffle unbox react
```

Then, you are ready to move on.