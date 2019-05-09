//The script function is change a game's state to ongoing

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var start1 = billet.gameStart(14, { from: account[0], to: account[0] });
            console.log("gameStart(14)");
            start1.then(function (Startet1) {
                console.log("Game 14 has Startet! ", Startet1)
            }).catch(function (e) {
                console.log(e);
            });

            var start2 = billet.gameStart(17, { from: account[1], to: account[1] });
            console.log("gameStart(17)");
            start2.then(function (Startet2) {
                console.log("Game 17 has started!", Startet2)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}