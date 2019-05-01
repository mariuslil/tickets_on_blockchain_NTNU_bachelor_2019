pragma solidity >=0.4.22 <0.6.0;

/* TODO:
-Make a score variable in struct game - May?
-Create function for buy ticket with owner
-Create function for vailedate ticket
-Create struct season - may?
-Create function create season - may?
-Create function get list over available Tickets - may?
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
        //which ticket the owner owns
        uint[50] ticketOwns;
    }

    //enum which state the ticket is in
    enum States {available, bought, spent, invaild}

    //all Owners
    owner[] Owners;

    //all Games
    game[] Games;

    //Create event for CreateGame
    event CreateGame(uint _GameId, string _homeTeam, string _foreignTeam, uint _tickets);

    //Create event for CreateTicket
    event CreateTicket(uint _ticketId, uint _GameId, int _price, States state);

    //Create event for CreateOwner
    event CreateOwner(uint _ownerId, string  _name, address _addr, int _mobile, uint[50] _ticketOwns);

    //createOwner function goal is to create a owner in Onwers[]
    //@param uint _ownerId setting the id to owner
    //@param string memory _name setting full name
    //@param address _addr is the ethereum address in the network to user
    //@param int _mobile setting mobile number to owner
    //@returns bool, return true if the function was successfull
    function createOwner(uint _ownerId, string memory _name, address _addr, int _mobile) public returns(bool){
        //check if the id or address already begin used
        //checkOwner(_ownerId, _addr);

        uint[50] memory ticketsOwns;                                                //A owner can only max 50 tickets

        owner memory o = owner(_ownerId, _name, _addr, _mobile, ticketsOwns);      //Create a temporary memory of struct owner
        Owners.push(o);

        emit CreateOwner(_ownerId, _name, _addr, _mobile, ticketsOwns);         //Emit an event on success
        return(true);
    }

    //checkOwner function is to make sure that id and address aren't begin used more then one time - not working
    //@param unit _ownerId is the id begin check
    //@param address _addr is the address begin check 
    //@returns string and bool, return true if not begin used, and false if are already used
    function checkOwner(uint _ownerId, address _addr) internal view returns(string memory,bool){
        for(uint i = 0; i <= Owners.length; i++){
            if(Owners[i].owner_id == _ownerId && Owners[i].addr == _addr){
                return ("the Id and address is already begin used",false);
            }
        }
        return ("The owner id and address is available!", true);
    }

    //Create a game and tickets in Game[]
    //@param uint _gameId is the the id of a game
    //@param string memory _homeTeam are the name of hometeam
    //@param string memory _foreignTeam is the name of the foreignteam
    //@param unit _ticket is the number of tickets in a game
    //@param int _price is the price of a ticket
    //return true if function was successful
    function createGame(uint _gameId, string memory _homeTeam, string memory _foreignTeam, uint _tickets, int _price ) public returns(bool){
        game memory g = game(_gameId, _homeTeam, _foreignTeam, _tickets);       //Create a temporary memory of struct game
        Games.push(g);
       
        emit CreateGame(_gameId, _homeTeam, _foreignTeam, _tickets);            //Emit an event on success 

        createTicket(_gameId, _tickets, _price);                                //call the function createTicket for creating the                                                                               //tickets in a game

        return true;
    }

    //createTicket function create ticket to a game
    //@param uint _gameId is the id of game we want create ticket for
    //@param uint _tickets is the number of tickets creating
    //@param int _price is the price of a ticket
    function createTicket(uint _gameId, uint _tickets, int _price)public returns(bool){
        //check if the _gameId and _tickets is same in Games[_gameId]
        if(Games[_gameId].game_id == _gameId && Games[_gameId].number_of_tickets == _tickets){

            //creating the number of ticket in a game
                for(uint i = 0; i < _tickets; i++){

                    Games[_gameId].tickets[i] = ticket(i, _gameId, _price, States.available);   //add tickets for tickets in struct game

                    emit CreateTicket(i, _gameId, _price, States.available);            //Emit an event on success
                }
                return true;                                                           //return if is successfull
            } else {
                return false;                                                        //return false is _gameId and _tickets dont match
            }
         }

    //getTicket function is to get a ticket by it's gameId and ticketId
    //@param uint _gameId is the id of a game
    //@param uint _ticketId is the id of ticket in the game
    //return gameId, ticketId and state to a ticket
    function getTicket(uint _gameId, uint _ticketId) public view returns(uint, uint, States state){
        return(Games[_gameId].tickets[_ticketId].game_id,
        Games[_gameId].tickets[_ticketId].ticket_id, 
        Games[_gameId].tickets[_ticketId].state);
    }

    //Return number of ticket available in a game
    //@param uint _gameId is the id of a game
    function getTicketAvailable(uint _gameId) public view returns(int){
        int counter = 0;

        //check alle tickets in a game
        for(uint i = 0; i < Games[_gameId].number_of_tickets; i++){

            //if is successful, will add to the counter
            if(Games[_gameId].tickets[i].state == States.available && Games[_gameId].tickets[i].game_id == Games[_gameId].game_id){
                counter++;
            }
        }
        return (counter);               //return the number of ticket available
    }

    function buyTicket(uint _gameId) public returns(bool){
     
    }

    function vaildateTicket(uint _ticketId) public returns(bool){

    }
}