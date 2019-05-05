//The script is for get all the information about event Organizer

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    //["BigNumber", "BN", "String"].
    //contract.numberFormat = 'String';

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var event1 = billet.getEventOrganizer(27, { from: account[0], to: account[0] });
            console.log("getEventOrganizer Organizer 27");
            event1.then(function (Organizer) {
                console.log("Organizer 27: ", Organizer)
            }).catch(function (e) {
                console.log(e);
            });

            var event2 = billet.getEventOrganizer(34, { from: account[1], to: account[1] });
            console.log("getEventOrganizer Organizer 34");
            event2.then(function (Organizer) {
                console.log("Organizer 34: ", Organizer)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    console.log("test");
    callback();
}