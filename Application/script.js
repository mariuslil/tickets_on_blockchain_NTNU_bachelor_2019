module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../test/build/contracts/Services.json"));
    contract.setProvider(web3.currentProvider);

    var e = contract.deployed().then(function (instance) { billet = instance; billet.createGame(0, "lag1", "lag2", 10, 100); billet.getTicket(0) });
    console.log(e)
    callback();
}
