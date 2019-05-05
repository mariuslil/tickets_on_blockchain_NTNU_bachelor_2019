//The script is information about ticket in a game

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;
            var t = billet.getTicket(14, 0, { from: account[0], to: account[0] });
            console.log("getTicket for game 14");
            t.then(function (v) {
                console.log("Game: 14, value 1 is ", v);
            }).catch(function (e) {
                console.log(e);
            });

            var t2 = billet.getTicket(14, 43, { from: account[0], to: account[0] });
            console.log("getTicket2 for game 14");
            t2.then(function (v2) {
                console.log("Game: 14, value 2 is ", v2);
            }).catch(function (e) {
                console.log(e);
            });

            var t_2 = billet.getTicket(17, 0, { from: account[1], to: account[1] });
            console.log("getTicket for game 17");
            t_2.then(function (v_2) {
                console.log("Game: 17,value 1 is ", v_2);
            }).catch(function (e) {
                console.log(e);
            });

            var t2_2 = billet.getTicket(17, 55, { from: account[1], to: account[1] });
            console.log("getTicket2 for game 17");
            t2_2.then(function (v2_2) {
                console.log("Game:17 ,value 2 is ", v2_2);
            }).catch(function (e) {
                console.log(e);
            });

            var a = billet.getTicketAvailable(14, { from: account[0] });
            console.log("getTicketAvailable for game 14");
            a.then(function (available) {
                console.log("the number og ticket available for game 14 is ", available);
            }).catch(function (e) {
                console.log(e);
            });

            var a2 = billet.getTicketAvailable(17, { from: account[1] });
            console.log("getTicketAvailable for game 17");
            a2.then(function (available2) {
                console.log("the number og ticket available for game 17 is ", available2);
            }).catch(function (e) {
                console.log(e);
            });

            var g1 = billet.getGame(14, { from: account[0], to: account[0] });
            console.log("getGame for game 14");
            g1.then(function (game) {
                console.log("Game 14: ", game)
            }).catch(function (e) {
                console.log(e);
            });

            var g2 = billet.getGame(17, { from: account[0], to: account[0] });
            console.log("getGame for game 17");
            g2.then(function (game) {
                console.log("Game 17: ", game)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}