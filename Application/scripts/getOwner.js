//The script is get all the information about owner

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var o13 = billet.getOwner(13, { from: account[2], to: account[2] });
            console.log("getOwner 13");
            o13.then(function (Owner13) {
                console.log("Owner 13: ", Owner13);
            }).catch(function (e) {
                console.log(e);
            });

            var o26 = billet.getOwner(26, { from: account[3], to: account[3] });
            console.log("getOwner 26");
            o26.then(function (Owner26) {
                console.log("Owner 26: ", Owner26);
            }).catch(function (e) {
                console.log(e);
            });

            var o2 = billet.getOwner(2, { from: account[4], to: account[4] });
            console.log("getOwner 13");
            o2.then(function (Owner2) {
                console.log("Owner 2: ", Owner2);
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}