//The script is for create three test users

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var user1 = billet.createUser(13, "Andrine Celine Flatby", account[2], 7345232, { from: account[2], to: account[2] });
            console.log("CreateUser(13, Andrine Celine Flatby, account[0], 7345232)");
            user1.then(function (User1) {
                console.log("User: ", User1);
            }).catch(function (e) {
                console.log(e);
            });

            var user2 = billet.createUser(26, "Marius Lillevik", account[3], 45423455, { from: account[3], to: account[3] });
            console.log("CreateUser(26, Marius Lillevik, account[1], 45423455) 2");
            user2.then(function (User2) {
                console.log("User: ", User2);
            }).catch(function (e) {
                console.log(e);
            });

            var user3 = billet.createUser(2, "Ole Bjørn Gran", account[4], 53524231, { from: account[4], to: account[4] });
            console.log("CreateUser(2,Ole Bjørn Gran, account[2], 53524231)");
            user3.then(function (User2) {
                console.log("User: ", User2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}