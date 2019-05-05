//The script function is to vaildate alle the ticket for every user

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var vaildate1 = billet.vaildateTicket(13, 14, { from: account[2], to: account[2] });
            console.log("vaildateTicket(13, 14)");
            vaildate1.then(function (vaildateTicket1) {
                console.log("Ticket is vaildate for user 13 and game 14", vaildateTicket1);
            }).catch(function (e) {
                console.log(e);
            });

            var vaildate2 = billet.vaildateTicket(13, 17, { from: account[2], to: account[2] });
            console.log("vaildateTicket(13, 17)");
            vaildate2.then(function (vaildateTicket2) {
                console.log("Ticket is vaildate for user 13 and game 17", vaildateTicket2);
            }).catch(function (e) {
                console.log(e);
            });

            var vaildate3 = billet.vaildateTicket(26, 17, { from: account[3], to: account[3] });
            console.log("vaildateTicket(26, 17)");
            vaildate3.then(function (vaildateTicket3) {
                console.log("Ticket is vaildate for user 26 and game 17", vaildateTicket3);
            }).catch(function (e) {
                console.log(e);
            });

            var vaildate4 = billet.vaildateTicket(2, 14, { from: account[4], to: account[4] });
            console.log("vaildateTicket(2, 14)");
            vaildate4.then(function (vaildateTicket4) {
                console.log("Ticket is vaildate for user 2 and game 14", vaildateTicket4);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}