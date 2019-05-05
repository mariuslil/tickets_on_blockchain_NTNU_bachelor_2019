import { default as Web3 } from 'web3';

var web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //set the prodiver you wish from Wbe3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("HttpProvider://localhost:7545"));
}

//var abi??