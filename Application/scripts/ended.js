//The script function is to change the test games state to ended

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var ended1 = billet.gameEnded(14, { from: account[0], to: account[0] });
            console.log("gameEnded(14)");
            ended1.then(function (ended1) {
                console.log("Game 14 has end", ended1)
            }).catch(function (e) {
                console.log(e);
            });

            var ended2 = billet.gameEnded(17, { from: account[1], to: account[1] });
            console.log("gameEnded(17)");
            ended2.then(function (ended2) {
                console.log("Game 14 has end", ended2)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}