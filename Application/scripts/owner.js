//The script is for create owners

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var o = billet.createOwner(13, "Andrine Celine Flatby", account[0], 7345232, { from: account[2], to: account[2] });
            console.log("Create Owner 1");
            o.then(function (owner) {
                console.log("Owner 1: ", owner);
            }).catch(function (e) {
                console.log(e);
            });

            var o2 = billet.createOwner(26, "Marius Lillevik", account[1], 45423455, { from: account[3], to: account[3] });
            console.log("Create Owner 2");
            o2.then(function (owner2) {
                console.log("Owner 2: ", owner2);
            }).catch(function (e) {
                console.log(e);
            });

            var o3 = billet.createOwner(2, "Ole Bjørn Gran", account[2], 53524231, { from: account[4], to: account[4] });
            console.log("Create Owner 3");
            o3.then(function (owner3) {
                console.log("Owner 3: ", owner3);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}