//The script function is to let a user buy tickets from a game

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var buys3 = billet.buyTickets(26, 17, 5, { from: account[3], to: account[0] });
            console.log("buyTickets(26, 17, 10)");
            buys3.then(function (bought3) {
                console.log("User 13, Tickets 17: ", bought3);
            }).catch(function (e) {
                console.log(e);
            });

        });
    });
    callback();
}