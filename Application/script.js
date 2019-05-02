module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../test/build/contracts/Services.json"));
    contract.setProvider(web3.currentProvider);

    contract.deployed().then(function (instance) {
        billet = instance;
        var o = billet.createOwner(0, "Andrine", "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75", 1234, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("Create Owner");
        o.then(function (owner) {
            console.log(owner);
        }).catch(function (e) {
            console.error(e);
        });
        var a = billet.createGame(0, "lag1", "lag2", 10, 100, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("Create game");
        a.then(function (g) {
            console.log(g);
        }).catch(function (e) {
            console.error(e);
        });

        var t = billet.getTicket(0, 0, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("getTicket");
        t.then(function (v) {
            console.log("value is ", v);
        }).catch(function (e) {
            console.error(e);
        });

        var t2 = billet.getTicket(0, 10, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("getTicket");
        t2.then(function (v2) {
            console.log("value is ", v2);
        }).catch(function (e) {
            console.error(e);
        });

        var a = billet.getTicketAvailable(0, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("getTicketAvailable");
        a.then(function (available) {
            console.log("the number og ticket available is ", available);
        }).catch(function (e) {
            console.error(e);
        });

        var b = billet.buyTicket(0, 0, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("Buy ticket");
        b.then(function (bought) {
            console.log(bought);
        }).catch(function (e) {
            console.error(e);
        });

        var owns = billet.getTicketOwner(0, 0, { from: "0x7D7454E5feEB14802775Ce57788BF05c4b9B6B75" });
        console.log("getTicketOwner");
        owns.then(function (ownsTicket) {
            console.log(ownsTicket);
        }).catch(function (e) {
            console.error(e);
        });

    }).catch(function (e) {
        console.error(e);
    });
    console.log("test");
    callback();
}
