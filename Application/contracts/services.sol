pragma solidity >=0.4.22 <0.6.0;

/* TODO:

Extra:
-Create struct season
-Create function create season 
-Make a score variable in struct game 
*/

contract Services{

    struct ticket{
        //the id of the ticket
        uint ticket_id;
        //the id of game to the ticket
        uint game_id;
        //the price of the ticket, inn kr
        int price;
        //What state the ticket is in
        States state;
    }

    struct game{
        //the id of game
        uint game_id;
        //name of the home team
        string homeTeam;
        //the name of foreign team
        string foreignTeam;
        //the number of ticket in a game
        uint number_of_tickets;
        //create a mapping to struct tickets
        mapping(uint => ticket) tickets;
    }

    struct owner{
        //the id of the owner
        uint owner_id;
        //the name og onwer
        string name;
        //the addr of owner in ethereum
        address addr;
        //mobile number to owner
        int mobile;
        //number of ticket own
        uint ticketOwns;
        //which ticket the owner owns
        mapping(uint => ticket) tickets;
    }

    //enum which state the ticket is in
    enum States {available, bought, spent, invaild}

    //all Owners
    owner[] Owners;

    //all Games
    game[] Games;

    //Create event for createGame
    event CreateGame(uint _GameId, string _homeTeam, string _foreignTeam, uint _tickets);

    //Create event for createTicket
    event CreateTicket(uint _ticketId, uint _GameId, int _price, States state);

    //Create event for createOwner
    event CreateOwner(uint _ownerId, string  _name, address _addr, int _mobile, uint _ticketOwns);

    //Create event for buyTickets
    event BuyTickets(uint _ownerId, uint _gameId, uint _tickets);

    //Create event for buyTicket
    event BuyTicket(uint _ownerId, uint _gameId, uint _ticketId, int _price, States state);

    //Create event for TicketState
    event TicketState(uint _ownerId, uint _gameId, uint _ticketId, States state);

    //createOwner function goal is to create a owner in Onwers[]
    //@param uint _ownerId setting the id to owner
    //@param string memory _name setting full name
    //@param address _addr is the ethereum address in the network to user
    //@param int _mobile setting mobile number to owner
    //@returns bool, return true if the function was successfull
    function createOwner(uint _ownerId, string memory _name, address _addr, int _mobile) public returns(bool){

        //call the function checkOwner to check _ownerId and _addr
        if(checkOwner(_ownerId, _addr) == false){
            return (false);
        } else {
            owner memory o = owner(_ownerId, _name, _addr, _mobile, 0);      //Create a temporary memory of struct owner
            Owners.push(o);

            emit CreateOwner(_ownerId, _name, _addr, _mobile, 0);         //Emit an event on success
        
            return (true);
        }

    }

    //checkOwner function is to make sure that id and address aren't begin used more then one time
    //@param unit _ownerId is the id begin check
    //@param address _addr is the address begin check 
    //@returns string and bool, return true if not begin used, and false if are already used
    function checkOwner(uint _ownerId, address _addr) public view returns(bool){

        //check if Owners[] holds something
        if(getCounterOwner() != 0){

            //check every Owners[]
            for(uint i = 0; i < getCounterOwner(); i++){

                //if ownerId and addr is the same
                if(Owners[i].owner_id == _ownerId && Owners[i].addr == _addr){
                    
                    return (false);                                                 //return false, id and addr already begin used
                }
            }
        }

        return (true);                                                          //return true, Owners dont hold anything
    }

    //getCounterOwner function is count how many object is in the Owners[]
    //@return uint of how many object is in the Owners[]
    function getCounterOwner() public view returns(uint){
        return (Owners.length);
    }

    //findPosOwner function is to find the position of a owner
    //@param uint _ownerId is the the id of a owner
    //@return uint of position to ownerId in the Owners[]
    function findPosOwner(uint _ownerId) public view returns(uint){

        //go through ever object in Owners[]
        for(uint i= 0; i < getCounterOwner(); i++){

            //check if the ownerId matches
            if(Owners[i].owner_id == _ownerId){
                return (i);                                             //return the position
            }
        }
        return 0;                                                       //return 0 if there are no objekt in Owners[]
    }

    //Create a game and tickets in Game[]
    //@param uint _gameId is the the id of a game
    //@param string memory _homeTeam are the name of hometeam
    //@param string memory _foreignTeam is the name of the foreignteam
    //@param unit _ticket is the number of tickets in a game
    //@param int _price is the price of a ticket
    //@return true if function was successful
    function createGame(uint _gameId, string memory _homeTeam, string memory _foreignTeam, uint _tickets, int _price ) public returns(bool){
        if(checkGame(_gameId) == false){
            return (false);
        } else{
            game memory g = game(_gameId, _homeTeam, _foreignTeam, _tickets);       //Create a temporary memory of struct game
            Games.push(g);
       
            emit CreateGame(_gameId, _homeTeam, _foreignTeam, _tickets);            //Emit an event on success 

            createTicket(_gameId, _tickets, _price);                                //call the function createTicket for creating the tickets in a game

            return (true);
        }
    }
    
    //checkGame function check if gameId already exits
    //@param uint _gameId is the id of a game
    //@return bool, true if the gameId dont already exits and false if exits
    function checkGame(uint _gameId) public view returns(bool){

        //check if Games[] hold something
        if(getCountGame() != 0){

            //go thought all the games
            for(uint i = 0; i < getCountGame(); i++){

                //check if id already exits
                if(Games[i].game_id == _gameId){
                    return (false);                         //return false if gameId already begin used
                } 
            }
        } 
        return (true);                                  //return if Games[] dont hold anything
    }

    //getCounterOwner function is count how many object is in the Games[]
    //@return uint of how many object is in the Games[]
    function getCountGame() public view returns(uint){
        return(Games.length);
    }

    //createTicket function create ticket to a game
    //@param uint _gameId is the id of game we want create ticket for
    //@param uint _tickets is the number of tickets creating
    //@param int _price is the price of a ticket
    function createTicket(uint _gameId, uint _tickets, int _price)public returns(bool){
        uint pos = findPosGame(_gameId);
        //check if the _gameId and _tickets is same in Games[_gameId]
        if(Games[pos].game_id == _gameId && Games[pos].number_of_tickets == _tickets){
            //creating the number of ticket in a game
                for(uint i = 0; i < _tickets; i++){

                    Games[pos].tickets[i] = ticket(i, _gameId, _price, States.available);   //add tickets for tickets in struct game
                
                    emit CreateTicket(i, _gameId, _price, States.available);            //Emit an event on success
                }
                return true;                                                           //return if is successfull

            } else {

                return false;                                                        //return false is _gameId and _tickets dont match
            }
         }

    //findPosGames function is to find the position of a game
    //@param uint _gameId is the the id of a owner
    //@return uint of position to gameId in the Games[]
    function findPosGame(uint _gameId) public view returns(uint){

        //go through ever object in Games[]
        for(uint i= 0; i < getCountGame(); i++){

            //if gameId  is the same
            if(Games[i].game_id == _gameId){
                return (i);
            }
        }
        return 0;
    }

    //getTicket function is to get a ticket by it's gameId and ticketId
    //@param uint _gameId is the id of a game
    //@param uint _ticketId is the id of ticket in the game
    //@return gameId, ticketId and state to a ticket
    function getTicket(uint _gameId, uint _ticketId) public view returns(uint, uint, States state){
        uint pos =findPosGame(_gameId);
        
        return(Games[pos].tickets[_ticketId].game_id,
        Games[pos].tickets[_ticketId].ticket_id, 
        Games[pos].tickets[_ticketId].state);
    }

    //Return number of ticket available in a game
    //@param uint _gameId is the id of a game
    //@return uint of number available in a game
    function getTicketAvailable(uint _gameId) public view returns(uint){
        uint counter = 0;
        uint pos = findPosGame(_gameId);

        //check alle tickets in a game
        for(uint i = 0; i < Games[pos].number_of_tickets; i++){

            //if is successful, will add to the counter
            if(Games[pos].tickets[i].state == States.available && Games[pos].tickets[i].game_id == Games[pos].game_id){
                counter++;
            }
        }
        return (counter);               //return the number of ticket available
    }


    //buyTicket let a owner buy a tickets in game
    //@param uint _ownerId is the id of the owner
    //@param uint _gameId is the the id of game the owner want but ticket
    //@return true if there are any ticket available, false if no ticket available
    function buyTickets(uint _ownerId, uint _gameId, uint _tickets) public returns(bool){
        uint posG = findPosGame(_gameId);
        uint posO = findPosOwner(_ownerId);

            //go throught the tickets owner want to buy
            for(uint i = 0; i < _tickets; i++){

                uint posT = checkTicketsOwn(posO);

                //if are any ticket available
                if(checkTicketAvailable(posG) == false){
                
                    return (false);                                    //return false if buy more ticket then available

                }

                Owners[posO].tickets[posT]= Games[posG].tickets[i];     //copy the ticket information to owner

                Owners[posO].ticketOwns++;

                emit BuyTicket(_ownerId, _gameId, posT, Owners[posO].tickets[posT].price, Owners[posO].tickets[posT].state);
            }

            emit BuyTickets(_ownerId, _gameId, _tickets);

            return (true);                                          //return true if was successfull
    }

    //getTicketsOwn function is how many ticket owner owns
    //@param uint _ownerId is the id of a owner
    //@return uint of number ticket own
    function checkTicketsOwn(uint _posO) public view returns(uint){

        //check if owner owns tickets
        if(Owners[_posO].ticketOwns != 0){
            
            return(Owners[_posO].ticketOwns);        //return number if ticket owns
        } 

        return 0;                               //return 0 if own no tickets
    }

    //checkTicketAvailable function check if a ticket in a game
    //@param uint _gameId is the id of a game
    //@return bool, true if there are ticket available, false if no ticket available
    function checkTicketAvailable(uint _posG)public returns(bool){

        //check all the ticket in Games[pos]
        for(uint i = 0; i < Games[_posG].number_of_tickets; i++){
                //if are any ticket available
                if(Games[_posG].tickets[i].state == States.available){

                    Games[_posG].tickets[i].state = States.bought;            //change the state to bought

                    return (true);                                          //return true if was successful
                }
            }
        return false;                                                       //return false if no more ticket available
    }

    //getTicketOwner function is to get a ticket from owner
    //@param uint _ownerId is the id of owner
    //@param uint _ticketId is the id of ticket
    //@return uint and uint, the ownerID and ticketId
    function getTicketOwner(uint _ownerId) public view returns(uint, uint){
        uint pos = findPosOwner(_ownerId);
        return(Owners[pos].owner_id, Owners[pos].ticketOwns);
    }

    //checkTicket function is to check which game ticket is used for
    //@param uint _ownerId is the id of a owner
    //@param uint _gameId is the id of a game
    //@param uint _tickets is the function check for
    function checkTicket(uint _ownerId, uint _gameId, uint _tickets) public view returns(uint){
        uint pos = findPosOwner(_ownerId);
    
        //check ticket gameId
        if(Owners[pos].tickets[_tickets].game_id == _gameId){

            return (_tickets);
        }
    }

    //checkTickets function is to check how many own tickets to a game
    //@param uint _ownerId is the id of a owner
    //@param uint _gameId is the id of a game
    //@return uint counter with how many ticket own to a game
    function checkTickets(uint _ownerId, uint _gameId) public view returns(uint){
        uint pos = findPosOwner(_ownerId);
        uint counter = 0;

        //go throught ever own ticket
        for(uint i = 0; i < Owners[pos].ticketOwns; i++){

            //check ticket gameId
            if(Owners[pos].tickets[i].game_id == _gameId){
                counter++;                                                          //add to counter if gamedId is same
            }
        }
        return(counter);                                                            //return counter of how many ticket own in a game
    }

    //vaildateTicket function is to change the state of å ticket to spent
    //@param uint _ownerId is the id of a owner
    //@param uint _ticketId is the id of a ticket
    //@param uint _gameId is the id of a game
    //@return bool, true if ticket was successfull vaildate and change state spent, false if failed
    function vaildateTicket(uint _ownerId, uint _ticketId, uint _gameId) public returns(bool){
        uint posG = findPosGame(_gameId);
        uint posO = findPosOwner(_ownerId);

        //check if the the ticket is bought
        if(Owners[posO].tickets[_ticketId].state == States.bought){

            Owners[posO].tickets[_ticketId].state = States.spent;                           //change state to spent

            Owners[posO].tickets[_ticketId] = Games[posG].tickets[_ticketId];               //copy the ticket info to Games[]

            emit TicketState(_ownerId, _gameId, _ticketId, Owners[posO].tickets[_ticketId].state);

            return (true);                                                                  //return true if was suucessfull

        } else {
            return (false);                                                                 //return false
        }
    }

    //vaildateTicket function is to change the state of å ticket to invaild
    //@param uint _ownerId is the id of a owner
    //@param uint _ticketId is the id of a ticket
    //@param uint _gameId is the id of a game
    //@return bool, true if ticket was successfull vaildate and change state invaild, false if failed
    function invaildTicket(uint _ownerId, uint _ticketId, uint _gameId) public returns(bool){
        uint posG = findPosGame(_gameId);
        uint posO = findPosOwner(_ownerId);

        //check if the the ticket is spent
        if(Owners[posO].tickets[_ticketId].state == States.spent){

            Owners[posO].tickets[_ticketId].state = States.invaild;                           //change state to spent

            Owners[posO].tickets[_ticketId] = Games[posG].tickets[_ticketId];               //copy the ticket info to Games[]

            emit TicketState(_ownerId, _gameId, _ticketId, Owners[posO].tickets[_ticketId].state);

            return (true);                                                                  //return true if was suucessfull

        } else {
            return (false);                                                                 //return false if failed
        }
    }
}