const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_evnetOrganizerId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_homeTeam",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_foreignTeam",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_tickets",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "state",
                "type": "uint8"
            }
        ],
        "name": "CreateGame",
        "type": "event",
        "signature": "0x998c39f1ae3006c00da0b143431c30ceae8e8a9ebf600d7d2518044aaea58526"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_ticketPos",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_price",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "state",
                "type": "uint8"
            }
        ],
        "name": "CreateTicket",
        "type": "event",
        "signature": "0x97539382086e0add476d0d8bbbae481631e2f64a33fe93505fa983e7d596deea"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_addr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_mobile",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "_ticketOwns",
                "type": "uint256"
            }
        ],
        "name": "CreateUser",
        "type": "event",
        "signature": "0xdb5c54f0d7063989e75d10af0cff59163916ebb154284cdbaf84a0dcf78cfdf4"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_evnetOrganizerId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "CreateEventOrganizer",
        "type": "event",
        "signature": "0xe9d1a18d12d4547c8ef1b44691b7b7df6f792756080f97535799d97d63e12e79"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_tickets",
                "type": "uint256"
            }
        ],
        "name": "BuyTickets",
        "type": "event",
        "signature": "0x40b963f4c366c9198c53b5c895028a852b8d8e53a54f37afe27d373efefa14fe"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_ticketpos",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_price",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "state",
                "type": "uint8"
            }
        ],
        "name": "BuyTicket",
        "type": "event",
        "signature": "0xe72b23892c8d4d4414c71ca14e9e74d3ca3c203d8da2f31e1d791ae32d463e16"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_userId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_ticketId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "state",
                "type": "uint8"
            }
        ],
        "name": "TicketState",
        "type": "event",
        "signature": "0x24579924ee4db282267118b9187d4c6ac51707d33bd20040db020febaad041e3"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_evnetOrganizerId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_homeTeam",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_foreignTeam",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "state",
                "type": "uint8"
            }
        ],
        "name": "GameSate",
        "type": "event",
        "signature": "0x4e68a854e9cc6a926a82fba13a4309738873fceb9a479a09bf09e54ab3f4a2eb"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_addr",
                "type": "address"
            },
            {
                "name": "_evnetOrganizerId",
                "type": "uint256"
            }
        ],
        "name": "createEventOrganizer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x237b1d3f"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_evnetOrganizerId",
                "type": "uint256"
            }
        ],
        "name": "checkEventOrganizer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x68eb9cc0"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "checkAddr",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x0f55ce53"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCounterEventOrganizer",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x849db2f5"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_evnetOrganizerId",
                "type": "uint256"
            }
        ],
        "name": "findPosEventOrganizer",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5490b011"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_evnetOrganizerId",
                "type": "uint256"
            }
        ],
        "name": "getEventOrganizer",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x55c73485"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_addr",
                "type": "address"
            },
            {
                "name": "_mobile",
                "type": "int256"
            }
        ],
        "name": "createUser",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xd67fccc0"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            }
        ],
        "name": "checkUser",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x723331bb"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCounterUsers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdd338e35"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            }
        ],
        "name": "findPosUser",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf05884f9"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "name": "_evnetOrganizerId",
                "type": "uint256"
            },
            {
                "name": "_homeTeam",
                "type": "string"
            },
            {
                "name": "_foreignTeam",
                "type": "string"
            },
            {
                "name": "_tickets",
                "type": "uint256"
            },
            {
                "name": "_price",
                "type": "int256"
            }
        ],
        "name": "createGame",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8e21b54a"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "checkGame",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x01e3eb27"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCountGame",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x2fdc8160"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "name": "_tickets",
                "type": "uint256"
            },
            {
                "name": "_price",
                "type": "int256"
            }
        ],
        "name": "createTicket",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x86c5325b"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "findPosGame",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7d30e1de"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "name": "_ticketPos",
                "type": "uint256"
            }
        ],
        "name": "getTicket",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "state",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xa426e4c8"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "getGame",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "state",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xa2f77bcc"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_eventOrganizerId",
                "type": "uint256"
            },
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "getEventOrganizerGame",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "state",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x20fc1de9"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_eventOrganizerId",
                "type": "uint256"
            }
        ],
        "name": "countEventOrganizerGame",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5565b962"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_eventOrganizerId",
                "type": "uint256"
            }
        ],
        "name": "getEventOrganizerAddr",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x77beeaa2"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "getTicketAvailable",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x9076a476"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_gameId",
                "type": "uint256"
            },
            {
                "name": "_tickets",
                "type": "uint256"
            }
        ],
        "name": "buyTickets",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc9a450df"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_posU",
                "type": "uint256"
            },
            {
                "name": "_posG",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xd6febde8"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "int256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xb0467deb"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_ticket",
                "type": "uint256"
            }
        ],
        "name": "getUser_ticket",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "State",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf3293005"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "get_number_Of_ticket_own",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xde837923"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "gameStart",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb8a5368a"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "gameEnded",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8b46a6da"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "vaildateTicket",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xf9ed0b4c"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_userId",
                "type": "uint256"
            },
            {
                "name": "_gameId",
                "type": "uint256"
            }
        ],
        "name": "invalidTicket",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x25e1ea98"
    }
];

const address = '0xAb46143B5D9b322B5482D3bB6A445b223a441296';