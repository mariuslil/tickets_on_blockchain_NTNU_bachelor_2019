//The script function is to let a user buy tickets from a game

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var buys1 = billet.buyTickets(13, 14, 5, { from: account[2], to: account[0] });
            console.log("buyTickets(13, 14, 10)");
            buys1.then(function (bought1) {
                console.log("User 13, Tickets 14: ", bought1);
            }).catch(function (e) {
                console.log(e);
            });

            var buys2 = billet.buyTickets(13, 17, 4, { from: account[2], to: account[0] });
            console.log("buyTickets(13, 17, 10)");
            buys2.then(function (bought2) {
                console.log("User 13, Tickets 17: ", bought2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}