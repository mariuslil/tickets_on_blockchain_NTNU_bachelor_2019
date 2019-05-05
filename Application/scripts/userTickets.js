//The script functionality is to create three test user for the system

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;


            var userTicket1 = billet.getUser_ticket(13, 0, { from: account[2], to: account[2] });
            console.log("getOwner_ticket(13, 0)");
            userTicket1.then(function (ticket1) {
                console.log("User  13 and ticket 0:", ticket1);
            }).catch(function (e) {
                console.log(e);
            });

            var userTicket2 = billet.getUser_ticket(13, 10, { from: account[2], to: account[2] });
            console.log("getUser_ticket(13, 10)");
            userTicket2.then(function (ticket2) {
                console.log("User 13 and ticket 10:", ticket2);
            }).catch(function (e) {
                console.log(e);
            });

            var userTicket3 = billet.getUser_ticket(13, 19, { from: account[2], to: account[2] });
            console.log("getUser_ticket(13, 19)");
            userTicket3.then(function (ticket3) {
                console.log("User 13 and ticket 20:", ticket3);
            }).catch(function (e) {
                console.log(e);
            });

            var userTicket4 = billet.getUser_ticket(26, 4, { from: account[3], to: account[3] });
            console.log("getUser_ticket(26, 4)");
            userTicket4.then(function (ticket4) {
                console.log("User 26 and ticket 5:", ticket4);
            }).catch(function (e) {
                console.log(e);
            });

            var userTicket5 = billet.getUser_ticket(2, 6, { from: account[4], to: account[4] });
            console.log("getUser_ticket(2, 6)");
            userTicket5.then(function (ticket5) {
                console.log("User 2 and ticket 7:", ticket5);
            }).catch(function (e) {
                console.log(e);
            });

            var ticketsOwn1 = get_number_Of_ticket_own(13, 14, { from: account[2], to: account[2] });
            console.log("get_number_Of_ticket_own(13, 14)");
            ticketsOwn1.then(function (tickets1) {
                console.log("User 13 for game 14 owns: ", tickets1);
            }).catch(function (e) {
                console.log(e);
            });

            var ticketsOwn2 = get_number_Of_ticket_own(13, 17, { from: account[2], to: account[2] });
            console.log("get_number_Of_ticket_own(13,17)");
            ticketsOwn2.then(function (tickets2) {
                console.log("User 13 for game 17 owns: ", tickets2);
            }).catch(function (e) {
                console.log(e);
            });

            var ticketsOwn3 = get_number_Of_ticket_own(26, 17, { from: account[3], to: account[3] });
            console.log("get_number_Of_ticket_own(26, 17)");
            ticketsOwn3.then(function (tickets3) {
                console.log("User 26 for game 17 owns: ", tickets3);
            }).catch(function (e) {
                console.log(e);
            });

            var ticketsOwn4 = get_number_Of_ticket_own(2, 14, { from: account[4], to: account[4] });
            console.log("get_number_Of_ticket_own(2, 14)");
            ticketsOwn4.then(function (tickets4) {
                console.log("User 2 for game 14 owns: ", tickets4);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}