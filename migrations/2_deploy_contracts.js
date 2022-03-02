var StarDuck = artifacts.require("./StarDuck.sol");

module.exports = async function (deployer) {
  await deployer.deploy(
    StarDuck,
    "Star Duck",
    "SRD",
    "https://gateway.pinata.cloud/ipfs/QmYaeMjyhjEeRn2uecZf5CRLAQov6yDa2X5Rq7Jm8zNnC7"
  );
};
