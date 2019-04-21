const Services = artifacts.require("./Services.sol");

module.exports = function (deployer) {
    deployer.deploy(Services);
};
