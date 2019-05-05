//The script is for create games

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var a = billet.createGame(14, 27, "Phonix", "New york", 44, 125, { from: account[0], to: account[0] });
            console.log("Create game");
            a.then(function (g) {
                console.log(g);
            }).catch(function (e) {
                console.log(e);
            });

            var a2 = billet.createGame(17, 34, "Amazone", "Liverpool", 56, 100, { from: account[1], to: account[1] });
            console.log("Create game 2");
            a2.then(function (g2) {
                console.log(g2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}

