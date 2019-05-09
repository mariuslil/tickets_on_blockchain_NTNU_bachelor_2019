App = {
    web3Prvoider: null,
    contracts: {},
    account: '0x0',

    init: function () {
        return App.initWeb3();
    },

    initWeb3: function () {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
        }
        return App.initContract();
    },

    initContract: function () {
        $.getJSON("Services.json", function (services) {
            App.contracts.services = TruffleContract(services);
            App.contracts.services.setProvider(App.web3Prvoider);
        });
    }

}