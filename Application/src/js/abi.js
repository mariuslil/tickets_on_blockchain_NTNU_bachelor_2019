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
        "type": "event"
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
        "type": "event"
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
            },
            {
                "indexed": false,
                "name": "_password",
                "type": "string"
            }
        ],
        "name": "CreateUser",
        "type": "event"
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
            },
            {
                "indexed": false,
                "name": "_password",
                "type": "string"
            }
        ],
        "name": "CreateEventOrganizer",
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
            },
            {
                "name": "_password",
                "type": "string"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
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
            },
            {
                "name": "_password",
                "type": "string"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
                "type": "address"
            },
            {
                "name": "",
                "type": "int256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
    }
];

//change the address to contract's address on blockchain
const address = '0x028d21AB89fb35F682EF19012591fF95FdD1aaB6';