//The script is for getting the information baout owners ticket

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;


            var o13t = billet.getOwner_ticket(13, 0, { from: account[2], to: account[2] });
            console.log("getOwner_ticket for owner 13 and ticket 0");
            o13t.then(function (o13t0) {
                console.log("owner 13 and ticket 0:", o13t0);
            }).catch(function (e) {
                console.log(e);
            });

            var o13t_10 = billet.getOwner_ticket(13, 10, { from: account[2], to: account[2] });
            console.log("getOwner_ticket for owner 13 and ticket 11");
            o13t_10.then(function (o13t10) {
                console.log("owner 13 and ticket 10:", o13t10);
            }).catch(function (e) {
                console.log(e);
            });

            var o13t_19 = billet.getOwner_ticket(13, 19, { from: account[2], to: account[2] });
            console.log("getOwner_ticket for owner 13 and ticket 20");
            o13t_19.then(function (o13t19) {
                console.log("owner 13 and ticket 20:", o13t19);
            }).catch(function (e) {
                console.log(e);
            });

            var o26t_4 = billet.getOwner_ticket(26, 4, { from: account[3], to: account[3] });
            console.log("getOwner_ticket for owner 13 and ticket 5");
            o26t_4.then(function (o26t4) {
                console.log("owner 26 and ticket 5:", o26t4);
            }).catch(function (e) {
                console.log(e);
            });

            var ot2_7 = billet.getOwner_ticket(2, 6, { from: account[4], to: account[4] });
            console.log("getOwner_ticket for owner 2 and ticket 7");
            ot2_7.then(function (o2t7) {
                console.log("owner 2 and ticket 7:", o2t7);
            }).catch(function (e) {
                console.log(e);
            });

            var numberTicket13_1 = get_number_Of_ticket_own(13, 14, { from: account[2], to: account[2] });
            console.log("get_number_Of_ticket_own for owner 13 and game 14");
            numberTicket13_1.then(function (ticket13_1) {
                console.log("Owner 13 for game 14 owns: ", ticket13_1);
            }).catch(function (e) {
                console.log(e);
            });

            var numberTicket13_2 = get_number_Of_ticket_own(13, 17, { from: account[2], to: account[2] });
            console.log("get_number_Of_ticket_own for owner 13 and game 17");
            numberTicket13_2.then(function (ticket13_2) {
                console.log("Owner 13 for game 17 owns: ", ticket13_2);
            }).catch(function (e) {
                console.log(e);
            });
            var numberTicket26 = get_number_Of_ticket_own(26, 17, { from: account[3], to: account[3] });
            console.log("get_number_Of_ticket_own for owner 26 and game 17");
            numberTicket26.then(function (ticket26) {
                console.log("Owner 26 for game 17 owns: ", ticket26);
            }).catch(function (e) {
                console.log(e);
            });

            var numberTicket2 = get_number_Of_ticket_own(2, 14, { from: account[4], to: account[4] });
            console.log("get_number_Of_ticket_own for owner 2 and game 14");
            numberTicket2.then(function (ticket2) {
                console.log("Owner 2 for game 14 owns: ", ticket2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}