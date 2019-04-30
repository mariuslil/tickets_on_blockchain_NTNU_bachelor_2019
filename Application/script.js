module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../test/build/contracts/Services.json"));
    contract.setProvider(web3.currentProvider);

    contract.deployed().then(function (instance) {
        billet = instance;
        var a = billet.createGame(0, "lag1", "lag2", 10, 100);
        console.log("create game");
        a.then(function (g) {
            console.log(g);
        });
        var t = billet.getTicket(0);
        console.log("getTicket");
        t.then(function (v) {
            console.log("value is ", v);
        });

        var t2 = billet.getTicket(10);
        console.log("getTicket");
        t2.then(function (v2) {
            console.log("value is ", v2);
        });
    }).catch(function (e) {
        console.error(e);
    });
    console.log("test");
    callback();
}
