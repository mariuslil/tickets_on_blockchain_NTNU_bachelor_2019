module.exports = {
  /**
  * Networks define how you connect to your ethereum client and let you set the
  * defaults web3 uses to send transactions. If you don't specify one truffle
  * will spin up a development blockchain for you on port 9545 when you
  * run `develop` or `test`. You can ask a truffle command to use a specific
  * network from the command line, e.g
  *
  * $ truffle test --network <network-name>
  */

  networks: {
    rpc: {
      host: "127.0.0.1", //localhost
      port: 8549
    },
    networks: {
      development: {
        host: "127.0.0.1", //localhost
        port: 8549,
        network_id: "1100", //need to match network begin used
        from: "0x184724094558512dd50c8e938286f715ca6a0284", //account on ethereum network
        gas: 4600000
      }
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
      // timeout: 100000
    },

    // Configure your compilers
    compilers: {
      solc: {
      }
    }
  }
}
