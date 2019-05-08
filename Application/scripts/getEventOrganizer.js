//The script function is for get all the information about event Organizer

module.exports = function (callback) {
    const TruffleContract = require("truffle-contract");
    const contract = TruffleContract(require("../build/contracts/Services.json"));

    contract.setProvider(web3.currentProvider);
    web3.eth.getAccounts().then(function (account) {

        contract.deployed().then(function (instance) {
            billet = instance;

            var event1 = billet.getEventOrganizer(27, { from: account[0], to: account[0] });
            console.log("getEventOrganizer(27)");
            event1.then(function (Organizer1) {
                console.log("Organizer 27: ", Organizer1)
            }).catch(function (e) {
                console.log(e);
            });

            var event2 = billet.getEventOrganizer(34, { from: account[1], to: account[1] });
            console.log("getEventOrganizer(34)");
            event2.then(function (Organizer2) {
                console.log("Organizer 34: ", Organizer2)
            }).catch(function (e) {
                console.log(e);
            });

            var eventaddr1 = billet.getEventOrganizerAddr(27, { from: account[0], to: account[0] });
            console.log("getEventOrganizerAddr(27)");
            eventaddr1.then(function (addr1) {
                console.log("Event Organizer 27 address is ", addr1);
            });

            var eventaddr2 = billet.getEventOrganizerAddr(34, { from: account[1], to: account[1] });
            console.log("getEventOrganizerAddr(34)");
            eventaddr2.then(function (addr2) {
                console.log("Event Organizer 34 address is ", addr2);
            });

            var eventgame1 = billet.countEventOrganizerGame(24, { from: account[0], to: account[0] });
            console.log("countEventOrganizerGame(24)");
            eventgame1.then(function (game1) {
                console.log("Event Organizer 24 organizing ", game1);
            });

            var eventgame2 = billet.countEventOrganizerGame(34, { from: account[1], to: account[1] });
            console.log("countEventOrganizerGame(34)");
            eventgame2.then(function (game2) {
                console.log("Event Organizer 34 address is ", game2);
            });
        });
    });
    callback();
}