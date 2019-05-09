//The script function is for get the information the games event organizer organizing  

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var event1 = billet.getEventOrganizerGame(27, 14, { from: account[0], to: account[0] });
            console.log("getEventOrganizerGame(Event Organizer 1, account[0], 27)");
            event1.then(function (Organizer1) {
                console.log("Organizer 27 and game 14: ", Organizer1)
            }).catch(function (e) {
                console.log(e);
            });

            var event2 = billet.getEventOrganizerGame(34, 17, { from: account[1], to: account[1] });
            console.log("getEventOrganizerGame(Event Organizer 2, account[1], 34)");
            event2.then(function (Organizer2) {
                console.log("Organizer 34 and game 17: ", Organizer2)
            }).catch(function (e) {
                console.log(e);
            });
        });
    });
    callback();
}