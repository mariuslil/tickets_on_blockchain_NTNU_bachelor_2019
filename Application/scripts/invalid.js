//THe script function is to change the state of a ticket to invaild

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var invaild1 = billet.invalidTicket(13, 14, { from: account[2], to: account[2] });
            console.log("invalidTicket(13, 14)");
            invaild1.then(function (invaildTicket1) {
                console.log("Ticket is invaild for user 13 and game 14", invaildTicket1);
            }).catch(function (e) {
                console.log(e);
            });

            var invaild2 = billet.invalidTicket(13, 17, { from: account[2], to: account[2] });
            console.log("invalidTicket(13, 17)");
            invaild2.then(function (invaildTicket2) {
                console.log("Ticket is invaild for user 13 and game 17", invaildTicket2);
            }).catch(function (e) {
                console.log(e);
            });

            var invaild3 = billet.invalidTicket(26, 17, { from: account[3], to: account[3] });
            console.log("invalidTicket(26, 17)");
            invaild3.then(function (invaildTicket3) {
                console.log("Ticket is invaild for user 26 and game 17", invaildTicket3);
            }).catch(function (e) {
                console.log(e);
            });

            var invaild3 = billet.invalidTicket(2, 14, { from: account[4], to: account[4] });
            console.log("invalidTicket(2, 14)");
            invaild3.then(function (invaildTicket4) {
                console.log("Ticket is invaild for user 2 and game 14", invaildTicket4);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}