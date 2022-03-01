var StarDuck = artifacts.require("./StarDuck.sol");

module.exports = async function (deployer) {
  await deployer.deploy(StarDuck, 1000000000);
};
