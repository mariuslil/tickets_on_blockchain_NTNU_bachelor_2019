//The script is for validate a ticket
module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var vaildate13_1 = billet.vaildateTicket(13, 14, { from: account[2], to: account[2] });
            console.log("vaildateTicket for owner 13 and game 14");
            vaildate13_1.then(function (v13_1) {
                console.log("Ticket is vaildate fo owner 13 and game 14", v13_1);
            }).catch(function (e) {
                console.log(e);
            });

            var vaildate13_2 = billet.vaildateTicket(13, 17, { from: account[2], to: account[2] });
            console.log("vaildateTicket for owner 13 and game 17");
            vaildate13_2.then(function (v13_2) {
                console.log("Ticket is vaildate fo owner 13 and game 17", v13_2);
            }).catch(function (e) {
                console.log(e);
            });

            var vaildate26 = billet.vaildateTicket(26, 17, { from: account[3], to: account[3] });
            console.log("vaildateTicket for owner 26 and game 17");
            vaildate26.then(function (v26) {
                console.log("Ticket is vaildate fo owner 26 and game 17", v26);
            }).catch(function (e) {
                console.log(e);
            });

            var vaildate2 = billet.vaildateTicket(2, 14, { from: account[4], to: account[4] });
            console.log("vaildateTicket for owner 2 and game 14");
            vaildate2.then(function (v2) {
                console.log("Ticket is vaildate fo owner 2 and game 14", v2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}