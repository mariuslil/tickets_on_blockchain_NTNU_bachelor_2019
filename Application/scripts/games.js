//The script function is to create two test games

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var game1 = billet.createGame(14, 27, "New york", "Rosenborg", 20, 100, { from: account[0], to: account[0] });
            console.log("createGame(14, 27, New york, Rosenborg, 20, 100)");
            game1.then(function (Game1) {
                console.log(Game1);
            }).catch(function (e) {
                console.log(e);
            });

            var game2 = billet.createGame(17, 34, "Amazone", "Liverpool", 56, 100, { from: account[1], to: account[1] });
            console.log("createGame(17, 34, Amazone, Liverpool, 56, 100)");
            game2.then(function (Game2) {
                console.log(Game2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}

