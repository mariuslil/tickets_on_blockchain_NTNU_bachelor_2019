//the script is for a owner to buy a ticket

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var b = billet.buyTickets(13, 14, 10, { from: account[0] });
            console.log("Owner 13 Buy ticket for game 14");
            b.then(function (bought) {
                console.log("Owner 13,Tickets 14: ", bought);
            }).catch(function (e) {
                console.log(e);
            });

            var b_1 = billet.buyTickets(13, 17, 10, { from: account[0] });
            console.log("Owner 13 Buy ticket for game 17");
            b_1.then(function (bought_1) {
                console.log("Owner 13, Tickets 17: ", bought_1);
            }).catch(function (e) {
                console.log(e);
            });

            var b2 = billet.buyTickets(26, 17, 5, { from: account[1] });
            console.log("Owner 26 Buy ticket for game 17");
            b2.then(function (bought2) {
                console.log("Owner 26, Ticket 17:", bought2);
            }).catch(function (e) {
                console.log(e);
            });

            var b3 = billet.buyTickets(2, 14, 7, { from: account[2] });
            console.log("Owner 2 Buy ticket for game 14");
            b3.then(function (bought3) {
                console.log("Owner 2, Ticket 14: ", bought3);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}