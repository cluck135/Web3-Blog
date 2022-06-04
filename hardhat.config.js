require("@nomiclabs/hardhat-waffle");
// in terminal before deploy enter: export pk="your_private_key"
// then enter: npx hardhat run scripts/deploy.js --network mumbai
// for some reason env variables arent working 
// blog deployed at polgon mumbai testnet... contract address: 0x94BAee80630422d19D7b61f810e442b81ac1be7e
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337 
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/99c419ebd94e4071b2b5852a1e7378fe",
      accounts: [process.env.pk],
    },
  }
}
