//The script function is to print out all information about test users

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var user1 = billet.getUser(13, { from: account[2], to: account[2] });
            console.log("getUser(13)");
            user1.then(function (User1) {
                console.log("User: ", User1);
            }).catch(function (e) {
                console.log(e);
            });

            var user2 = billet.getUser(26, { from: account[3], to: account[3] });
            console.log("getUser(26)");
            user2.then(function (User2) {
                console.log("User: ", User2);
            }).catch(function (e) {
                console.log(e);
            });

            var user3 = billet.getUser(2, { from: account[4], to: account[4] });
            console.log("getUser(13)");
            user3.then(function (User3) {
                console.log("User: ", User3);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}