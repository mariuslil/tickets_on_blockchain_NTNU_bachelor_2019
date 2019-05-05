//The script is change a game start to ongoing

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var start14 = billet.gameStart(14, { from: account[0], to: account[0] });
            console.log("gameEnded for game 14");
            start14.then(function (Startet) {
                console.log("Game 14 has Startet: ", Startet)
            }).catch(function (e) {
                console.log(e);
            });

            var start17 = billet.gameStart(17, { from: account[1], to: account[1] });
            console.log("gameEnded for game 17");
            start17.then(function (Startet) {
                console.log("Game 17 has started:", Startet)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}