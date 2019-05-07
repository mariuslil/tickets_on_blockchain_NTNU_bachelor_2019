//The script function is to let a user buy tickets from a game

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var buys4 = billet.buyTickets(2, 14, 3, { from: account[4], to: account[0] });
            console.log("buyTickets(2, 14, 10)");
            buys4.then(function (bought4) {
                console.log("User 2, Tickets 14: ", bought4);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}