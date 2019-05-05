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

            var invaild13_1 = billet.invaildTicket(13, 14, { from: account[2], to: account[2] });
            console.log("invaildTicket for owner 13 and game 14");
            invaild13_1.then(function (i13_1) {
                console.log("Ticket is invaild fo owner 13 and game 14", i13_1);
            }).catch(function (e) {
                console.log(e);
            });

            var invaild13_2 = billet.invaildTicket(13, 17, { from: account[2], to: account[2] });
            console.log("invaildTicket for owner 13 and game 17");
            invaild13_2.then(function (i13_2) {
                console.log("Ticket is invaild fo owner 13 and game 17", i13_2);
            }).catch(function (e) {
                console.log(e);
            });

            var invaild26 = billet.invaildTicket(26, 17, { from: account[3], to: account[3] });
            console.log("invaildTicket for owner 26 and game 17");
            invaild26.then(function (i26) {
                console.log("Ticket is invaild fo owner 26 and game 17", i26);
            }).catch(function (e) {
                console.log(e);
            });

            var invaild2 = billet.invaildTicket(2, 14, { from: account[4], to: account[4] });
            console.log("invaildTicket for owner 2 and game 14");
            invaild2.then(function (i2) {
                console.log("Ticket is invaild fo owner 2 and game 14", i2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}