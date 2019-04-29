const Services = artifacts.require("./services.sol");

module.exports = function (deployer) {
    deployer.deploy(Services);
};
