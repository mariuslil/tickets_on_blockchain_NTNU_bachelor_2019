//THe script is for change the state of a ticket o invaild and game to ended

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var ended14 = billet.gameEnded(14, { from: account[0] });
            console.log("gameEnded for game 14");
            ended14.then(function (ended) {
                console.log("Game 14 has end", ended)
            }).catch(function (e) {
                console.log(e);
            });

            var ended17 = billet.gameEnded(17, { from: account[0] });
            console.log("gameEnded for game 17");
            ended17.then(function (ended) {
                console.log("Game 14 has end", ended)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}