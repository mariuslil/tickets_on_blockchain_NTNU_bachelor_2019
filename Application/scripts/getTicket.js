//The script function is information about ticket in a game

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;
            var ticket1 = billet.getTicket(14, 0, { from: account[0], to: account[0] });
            console.log("getTicket(14, 0)");
            ticket1.then(function (ticket1) {
                console.log("Game: 14, value 1 is ", ticket1);
            }).catch(function (e) {
                console.log(e);
            });

            var ticket2 = billet.getTicket(14, 43, { from: account[0], to: account[0] });
            console.log("getTicket(14, 43)");
            ticket2.then(function (ticket2) {
                console.log("Game: 14, value 2 is ", ticket2);
            }).catch(function (e) {
                console.log(e);
            });

            var ticket3 = billet.getTicket(17, 0, { from: account[1], to: account[1] });
            console.log("getTicket(17, 0)");
            ticket3.then(function (ticket3) {
                console.log("Game: 17, value 1 is ", ticket3);
            }).catch(function (e) {
                console.log(e);
            });

            var ticket4 = billet.getTicket(17, 55, { from: account[1], to: account[1] });
            console.log("getTicket(17, 55)");
            ticket4.then(function (ticket4) {
                console.log("Game 17: ,value 2 is ", ticket4);
            }).catch(function (e) {
                console.log(e);
            });

            var ticketAvailable1 = billet.getTicketAvailable(14, { from: account[0] });
            console.log("getTicketAvailable for game 14");
            ticketAvailable1.then(function (available1) {
                console.log("the number og ticket available for game 14 is ", available1);
            }).catch(function (e) {
                console.log(e);
            });

            var ticketAvailable2 = billet.getTicketAvailable(17, { from: account[1] });
            console.log("getTicketAvailable for game 17");
            ticketAvailable2.then(function (available2) {
                console.log("the number og ticket available for game 17 is ", available2);
            }).catch(function (e) {
                console.log(e);
            });

            var game1 = billet.getGame(14, { from: account[0], to: account[0] });
            console.log("getGame for game 14");
            game1.then(function (Game1) {
                console.log("Game 14: ", Game1)
            }).catch(function (e) {
                console.log(e);
            });

            var game2 = billet.getGame(17, { from: account[0], to: account[0] });
            console.log("getGame for game 17");
            game2.then(function (Game2) {
                console.log("Game 17: ", Game2)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}