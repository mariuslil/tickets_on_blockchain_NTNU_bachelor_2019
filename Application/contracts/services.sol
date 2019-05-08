pragma solidity >=0.4.22 <0.6.0;

/* TODO:
-change owner to User
*/

contract Services{

    struct ticket{
        //the position of a ticket
        uint ticketPos;
        //the id of a user
        uint user_id;
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
        //the id of event organizer
        uint evnetOrganizer_id;
        //name of the home team
        string homeTeam;
        //the name of foreign team
        string foreignTeam;
        //the number of ticket in a game
        uint number_of_tickets;
        //the state of a Games
        GameStates gameState;
        //create a mapping to struct tickets
        mapping(uint => ticket) tickets;
    }

    struct user{
        //the id of the user
        uint user_id;
        //the name og onwer
        string name;
        //the addr of user in ethereum
        address addr;
        //mobile number to user
        int mobile;
        //number of ticket own
        uint ticketOwns;
        //which ticket the user owns
        mapping(uint => ticket) tickets;
    }

    struct eventOrganizer{
        //the id of event organizer
        uint evnetOrganizer_id;
        //the name of event
        string name;
        //the address of event organizer
        address addr;
    }

    //enum which state the ticket is in
    enum States {available, bought, spent, invaild}

    //enum for which state a game is
    enum GameStates{notStarted, ongoing, ended}

    //all Users
    user[] Users;

    //all Games
    game[] Games;

    //all event Organizer
    eventOrganizer[] EventOrganizers;

    //Create event for createGame
    event CreateGame(uint _gameId, uint _evnetOrganizerId, string _homeTeam, string _foreignTeam, uint _tickets, GameStates state);

    //Create event for createTicket
    event CreateTicket(uint _ticketPos, uint _userId,  uint _gameId, int _price, States state);

    //Create event for createUser
    event CreateUser(uint _userId, string  _name, address _addr, int _mobile, uint _ticketOwns);

    //Create event for createEvent
    event CreateEventOrganizer(uint _evnetOrganizerId, string _name, address _addr);

    //Create event for buyTickets
    event BuyTickets(uint _userId, uint _gameId, uint _tickets);

    //Create event for buyTicket
    event BuyTicket(uint _userId, uint _gameId, uint _ticketpos, int _price, States state);

    //Create event for TicketState
    event TicketState(uint _userId, uint _gameId, uint _ticketId, States state);

    //Create event for change gameState
    event GameSate(uint _gameId, uint _evnetOrganizerId, string _homeTeam, string _foreignTeam, GameStates state);

    //createEventOrganizer function create a event organizer in EventOrganizers[]
    //@param string memory _name is the name of a event organizer
    //@param address _addr is teh ethereum address to event organizer
    //@return bool, true if was successfull created, false if failed
    function createEventOrganizer(string memory _name, address _addr, uint _evnetOrganizerId) public returns(bool){

        //check if event organizer already exits
        if(checkEventOrganizer(_evnetOrganizerId) && checkAddr(_addr)){
            eventOrganizer memory e = eventOrganizer(_evnetOrganizerId, _name, _addr);      //Create a temporary memory of struct eventOrganizer
            EventOrganizers.push(e);

            emit CreateEventOrganizer(_evnetOrganizerId, _name, _addr);  

            return (true);

        } else{

            return(false);
        }
    }

    //checkEventOrganizer function makes sure that address aren't begin used more then one time
    //@param address _addr is the address begin check
    //@returns bool, return true if not begin used, and false if are already used
    function checkEventOrganizer(uint _evnetOrganizerId)public view returns(bool){

        //check if EventOrganizers[] hold something
        if(getCounterEventOrganizer() != 0){

            //go throught all EventOrganizers
            for(uint i = 0; i < getCounterEventOrganizer(); i ++){

                //check if the address is used
                if(EventOrganizers[i].evnetOrganizer_id == _evnetOrganizerId){

                    return(false);
                }
            }
        }
        return (true);
    }

    //checkAddr function makes sure that address aren't begin used more then one time
    //@param address _addr is the address begin check
    //@returns bool, return true if not begin used, and false if are already used
    function checkAddr(address _addr)public view returns(bool){

        //check if EventOrganizers[] hold something
        if(getCounterEventOrganizer() != 0){

            //go throught all EventOrganizers
            for(uint i = 0; i < getCounterEventOrganizer(); i ++){

                //check if the address is used
                if(EventOrganizers[i].addr == _addr){

                    return(false);                                                 //return false if address is already in used
                }
            }
        }

        //check if Users[] holds something
        if(getCounterUsers() != 0){

            //check every Users[]
            for(uint i = 0; i < getCounterUsers(); i++){

                //if address is the same
                if(Users[i].addr == _addr){

                    return (false);                                                 //return false, id and addr already begin used
                }
            }
        }

        return (true);                                                             //return true if address is not begin used
    }

    //getCounterEventOrganizer function counts how many object is in the EventOrganizers[]
    //@return uint of how many object is in the EventOrganizers[]
    function getCounterEventOrganizer() public view returns(uint){
        return EventOrganizers.length;
    }


    //findPosEventOrganizer function finds the position of a event organizer
    //@param uint  _evnetOrganizerId is the the id of a event organizer
    //@return uint of position to evnetOrganizerId in the EventOrganizers[]
    function findPosEventOrganizer(uint _evnetOrganizerId) public view returns(uint){

        //go through ever object in EventOrganizers[]
        for(uint i = 0; i < getCounterEventOrganizer(); i++){

            //check if the userId matches
            if(EventOrganizers[i].evnetOrganizer_id == _evnetOrganizerId){
                return (i);                                             //return the position
            }
        }
        return 0;                                                       //return 0 if there are no object in EventOrganizers[]
    }

    //getEventOrganizer function gets all the information about a event organizer
    //@param uint _evnetOrganizerId is the id of evnet organizer
    //@return uint of the evnet Organizer Id, string of evnet Organizer name and address of evnet Organizer
    function getEventOrganizer(uint _evnetOrganizerId)public view returns(uint, string memory, address){
        uint pos = findPosEventOrganizer(_evnetOrganizerId);

        return(EventOrganizers[pos].evnetOrganizer_id,
        EventOrganizers[pos].name,
        EventOrganizers[pos].addr);
    }

    //createUser function create a user in user[]
    //@param uint _userId setting the id to user
    //@param string memory _name setting full name
    //@param address _addr is the ethereum address in the network to user
    //@param int _mobile setting mobile number to user
    //@returns bool, return true if the function was successfull
    function createUser(uint _userId, string memory _name, address _addr, int _mobile) public returns(bool){

        //call the function checkUser to check _userId and _addr
        if(checkUser(_userId) && checkAddr(_addr)){

            user memory u = user(_userId, _name, _addr, _mobile, 0);      //Create a temporary memory of struct user
            Users.push(u);

            emit CreateUser(_userId, _name, _addr, _mobile, 0);        

            return (true);

        } else {

            return (false);
        }

    }

    //checkUser function make sure that id and address aren't begin used more then one time
    //@param unit _userId is the id begin check
    //@param address _addr is the address begin check
    //@returns bool, return true if not begin used, and false if are already used
    function checkUser(uint _userId) public view returns(bool){

        //check if Users[] holds something
        if(getCounterUsers() != 0){

            //check every Users[]
            for(uint i = 0; i < getCounterUsers(); i++){

                //if userId is the same
                if(Users[i].user_id == _userId){

                    return (false);
                }
            }
        }

        return (true);
    }

    //getCounterUser function counts how many object is in the Users[]
    //@return uint of how many object is in the Users[]
    function getCounterUsers() public view returns(uint){
        return (Users.length);
    }

    //findPosUser function finds the position of a user
    //@param uint _userId is the the id of a user
    //@return uint of position to userId in the Users[]
    function findPosUser(uint _userId) public view returns(uint){

        //go through ever object in Users[]
        for(uint i = 0; i < getCounterUsers(); i++){

            //check if the userId matches
            if(Users[i].user_id == _userId){
                return (i);                                             //return the position
            }
        }
        return 0;                                                       //return 0 if there are no object in Users[]
    }

    //Create a game and tickets in Game[]
    //@param uint _gameId is the the id of a game
    //@param string memory _homeTeam are the name of hometeam
    //@param string memory _foreignTeam is the name of the foreignteam
    //@param unit _ticket is the number of tickets in a game, it start on 0
    //@param int _price is the price of a ticket
    //@return true if function was successful
    function createGame(uint _gameId, uint _evnetOrganizerId, string memory _homeTeam,
    string memory _foreignTeam, uint _tickets, int _price)public returns(bool){

        //check if game already exists and event organizer exists
        if(!checkEventOrganizer(_evnetOrganizerId) && checkGame(_gameId)){

            game memory g = game(_gameId, _evnetOrganizerId, _homeTeam, _foreignTeam, _tickets, GameStates.notStarted);       //Create a temporary memory of struct game
            Games.push(g);

            emit CreateGame(_gameId,_evnetOrganizerId, _homeTeam, _foreignTeam, _tickets, GameStates.notStarted); 

            createTicket(_gameId, _tickets, _price);                                //call the function createTicket for creating the tickets in a game

            return (true);

        } else{
            return(false);
        }
    }

    //checkGame function check if gameId already exits
    //@param uint _gameId is the id of a game
    //@return bool, true if the gameId dont already exits and false if begin used
    function checkGame(uint _gameId) public view returns(bool){

        //check if Games[] hold something
        if(getCountGame() != 0){

            //go thought all the games
            for(uint i = 0; i < getCountGame(); i++){

                //check if gameId already exists
                if(Games[i].game_id == _gameId){
                    return (false); 
                }
            }
        }
        return (true);
    }

    //getCounterGame function counts how many object is in the Games[]
    //@return uint of how many object is in the Games[]
    function getCountGame() public view returns(uint){
        return(Games.length);
    }

    //createTicket function create ticket to a game
    //@param uint _gameId is the id of game we want create ticket for
    //@param uint _tickets is the number of tickets creating
    //@param int _price is the price of a ticket
    //@return bool, true if tickets was successfull created, false if failed
    function createTicket(uint _gameId, uint _tickets, int _price)public returns(bool){
        uint pos = findPosGame(_gameId);

        //check if the _gameId and _tickets is same in Games[_gameId]
        if(Games[pos].game_id == _gameId && Games[pos].number_of_tickets == _tickets){
            //creating the number of ticket in a game
                for(uint i = 0; i < _tickets; i++){

                    Games[pos].tickets[i] = ticket(i, 0, _gameId, _price, States.available);   //add tickets for tickets in struct game

                    emit CreateTicket(i, 0, _gameId, _price, States.available);
                }

                return (true);

            } else {

                return (false);
            }
         }

    //findPosGames function finds the position of a game
    //@param uint _gameId is the the id of a game
    //@return uint of position to gameId in the Games[]
    function findPosGame(uint _gameId) public view returns(uint){

        //go through ever object in Games[]
        for(uint i = 0; i < getCountGame(); i++){

            //if gameId  is the same
            if(Games[i].game_id == _gameId){
                return (i);                                         //return uint of the position
            }
        }
        return 0;                                                    // retunr 0, there are no object in Games[]
    }

    //getTicket function gets a ticket by it's gameId and ticketPos
    //@param uint _gameId is the id of a game
    //@param uint _ticketId is the id of ticket in the game
    //@return gameId, ticketPos and state to a ticket
    function getTicket(uint _gameId, uint _ticketPos) public view returns(uint, uint, uint, States state){
        uint pos = findPosGame(_gameId);

        return(Games[pos].tickets[_ticketPos].ticketPos,
        Games[pos].tickets[_ticketPos].game_id,
        Games[pos].tickets[_ticketPos].user_id,
        Games[pos].tickets[_ticketPos].state);
    }

    //getGame function gets all the information to a game
    //@param uint _gameId is the id of a game
    //@return gameId, eventOrganizersId, homeTeam, foreignTeam, number of ticket and gameState
    function getGame(uint _gameId) public view returns(uint, uint, string memory, string memory, uint, GameStates state){
        uint pos = findPosGame(_gameId);

        return(Games[pos].game_id,
        Games[pos].evnetOrganizer_id,
        Games[pos].homeTeam,
        Games[pos].foreignTeam,
        Games[pos].number_of_tickets,
        Games[pos].gameState);
    }

    //getEventOrganizerGame function gets all the information about game to evnt organizer
    //@param uint _eventOrganizerId is the id of a event organizer
    //@param uint _gameId is the id of a game
    //@return eventOrganizersId, name, gameId, homeTeam, foreignTeam, number of ticket and gameState
    function getEventOrganizerGame(uint _eventOrganizerId, uint _gameId) public view returns
    (uint,string memory, uint, string memory, string memory, uint, GameStates state){
        uint posG = findPosGame(_gameId);
        uint posU = findPosEventOrganizer(_eventOrganizerId);
        
        if(EventOrganizers[posU].evnetOrganizer_id == Games[posG].evnetOrganizer_id){
            return(EventOrganizers[posU].evnetOrganizer_id,
            EventOrganizers[posU].name,
            Games[posG].game_id,
            Games[posG].homeTeam,
            Games[posG].foreignTeam,
            Games[posG].number_of_tickets,
            Games[posG].gameState);
        }
    }

    //countEventOrganizerGame function count how many game a evnet organizer is organizing
    //@param uint _eventOrganizerId is the id of a event organizer
    //@param uint _gameId is the id of a game
    //@return uint of many many game a event organizer is organizing
    function countEventOrganizerGame(uint _eventOrganizerId) public view returns(uint){
        uint posU = findPosEventOrganizer(_eventOrganizerId);
        uint counter = 0;

        for(uint i = 0; i < getCountGame(); i++){

            if(EventOrganizers[posU].evnetOrganizer_id == Games[i].evnetOrganizer_id){
                counter++;
            }
        }
        return(counter);
    }

    //getEventOrganizerAddr get the ethereum address to a event organizer
    //@param uint _evnetOrganizerId is the id of event organizer
    //@return address to event organizer
    function getEventOrganizerAddr(uint _eventOrganizerId) public view returns(address){
       uint posU = findPosEventOrganizer(_eventOrganizerId);
       
       if(EventOrganizers[posU].evnetOrganizer_id == _eventOrganizerId){
           return(EventOrganizers[posU].addr);
       }
    }

    //getTicketAvailable gets number of tickets available in a game
    //@param uint _gameId is the id of a game
    //@return uint of number available in a game
    function getTicketAvailable(uint _gameId) public view returns(uint){
        uint counter = 0;
        uint pos = findPosGame(_gameId);

        //check all tickets in a game
        for(uint i = 0; i < Games[pos].number_of_tickets; i++){

            //if is successful, will add to the counter
            if(Games[pos].tickets[i].state == States.available && Games[pos].tickets[i].game_id == Games[pos].game_id){
                counter++;
            }
        }
        return (counter);
    }

    //buyTicket let a user buy several tickets in game
    //@param uint _userId is the id of the user
    //@param uint _gameId is the the id of game the user want buy ticket
    //@return bool, true if ticket was buyed, false if no ticket available
    function buyTickets(uint _userId, uint _gameId, uint _tickets) public returns(bool){
        uint posG = findPosGame(_gameId);
        uint posU = findPosUser(_userId);


        //check if there any ticket available
        if(getTicketAvailable(_gameId) >= _tickets){

            //go throught number of ticket user wish to buy
            for(uint i = 0; i < _tickets; i++){

                buy(posU, posG);
            
                }

                emit BuyTickets(_userId, _gameId, _tickets);

                return(true);
        }
        return (false);
    }

    //buy functio is go through all ticket in game and sett user to a tciket (let user buy it)
    //@param uint _posU is the position of the user
    //@param uint _posG is the position of the game
    //@return bool, true if a ticket was successfull bought, false if no ticket available
    function buy(uint _posU, uint _posG)public returns(bool){
        uint posT = Users[_posU].ticketOwns;

        //go throught very ticket in the game
        for(uint i = 0; i < Games[_posG].number_of_tickets; i++){

            //check if the ticket are available
            if(Games[_posG].tickets[i].state == States.available){

                Games[_posG].tickets[i].user_id = Users[_posU].user_id;       //Sett the user id

                Games[_posG].tickets[i].state = States.bought;               //change the state to bought

                Users[_posU].tickets[posT] = Games[_posG].tickets[i];         //cop ticket to Users[].tickets[]

                emit BuyTicket(Users[_posU].user_id,
                Users[_posU].tickets[posT].game_id,
                posT, Users[_posU].tickets[posT].price,
                Users[_posU].tickets[posT].state);

                Users[_posU].ticketOwns++;

                return (true);
            }
        }
        return (false);
    }

    //getUser function gets a ticket from user
    //@param uint _userId is the id of user
    //@param uint _ticketId is the id of ticket
    //@return uint and uint, the userIs and ticketId
    function getUser(uint _userId) public view returns(uint, string memory, int, uint){
        uint pos = findPosUser(_userId);

        return(Users[pos].user_id,
        Users[pos].name,
        Users[pos].mobile,
        Users[pos].ticketOwns);
    }

    //getUser_ticket function gets a ticket for user
    //@param uint _userId is the id of user
    //@param uint _ticket is the ticket we get
    //@return uint of userId, string memory of user name, uint ticketId own
    function getUser_ticket(uint _userId, uint _ticket) public view returns(uint, string memory, uint, uint, States State){
        uint pos = findPosUser(_userId);
        return(Users[pos].user_id,
        Users[pos].name,
        Users[pos].tickets[_ticket].user_id,
        Users[pos].tickets[_ticket].game_id,
        Users[pos].tickets[_ticket].state);
    }


    //getTicketsOwn function check how many tickets user owns to a game
    //@param uint _userId is the id of a user
    //@param uint _gameId is the id of a game
    //@return uint counter with how many ticket own to a game
    function get_number_Of_ticket_own(uint _userId, uint _gameId) public view returns(uint){
        uint pos = findPosUser(_userId);
        uint counter = 0;

        //go throught ever own ticket
        for(uint i = 0; i < Users[pos].ticketOwns; i++){

            //check ticket gameId
            if(Users[pos].tickets[i].game_id == _gameId){
                counter++;                                                          //add to counter if gamedId is same
            }
        }
        return(counter);                                                            //return counter of how many ticket own in a game
    }

    //gameStart function is the change the state of a game to ongoing
    //@param uint _gameId is the id of a game
    //@return bool, true if was successful, false if failed
    function gameStart(uint _gameId) public returns(bool) {
        uint pos = findPosGame(_gameId);

        if(Games[pos].gameState == GameStates.notStarted){

            Games[pos].gameState = GameStates.ongoing;

            emit GameSate(Games[pos].game_id, Games[pos].evnetOrganizer_id, Games[pos].homeTeam, Games[pos].foreignTeam, Games[pos].gameState);

            return (true);
        }
        return (false);
    }

    //gameEnded function changes the state of a game to ënded
    //@param uint _gameId is the id of a game
    //@return bool, true if was successful, false if failed
    function gameEnded(uint _gameId) public returns(bool) {
        uint pos = findPosGame(_gameId);

        if(Games[pos].gameState == GameStates.ongoing){

            Games[pos].gameState = GameStates.ended;

            emit GameSate(Games[pos].game_id, Games[pos].evnetOrganizer_id, Games[pos].homeTeam, Games[pos].foreignTeam, Games[pos].gameState);

            return (true);
        }
        return (false);
    }

    //vaildateTicket function changes the state of å ticket to spent
    //@param uint _userId is the id of a user
    //@param uint _gameId is the id of a game
    //@return bool, true if ticket was successfull vaildate and change state spent, false if failed
    function vaildateTicket(uint _userId, uint _gameId) public returns(bool){
        uint posG = findPosGame(_gameId);
        uint posU = findPosUser(_userId);

        if(!checkGame(_gameId) && Games[posG].gameState == GameStates.ongoing){
            for(uint i = 0; i < Users[posU].ticketOwns; i++){
                if(Users[posU].tickets[i].game_id == _gameId && Users[posU].tickets[i].state == States.bought){

                uint tickPos = Users[posU].tickets[i].ticketPos;
                
                Games[posG].tickets[tickPos].state = States.spent;                           //change state to spent

                Users[posU].tickets[i] = Games[posG].tickets[tickPos];            //copy the ticket info to Games[]

                emit TicketState(_userId, _gameId, i, Users[posU].tickets[i].state);

                }
            }
            return (true);
        }
         return (false);                                                                 //return false

    }

    //invaildTicket function changes the state of å ticket to spent
    //@param uint _userId is the id of a user
    //@param uint _gameId is the id of a game
    //@return bool, true if ticket was successfull invalid and change state invalid, false if failed
    function invalidTicket(uint _userId, uint _gameId) public returns(bool){
        uint posG = findPosGame(_gameId);
        uint posU = findPosUser(_userId);

        if(!checkGame(_gameId)){
            for(uint i = 0; i < Users[posU].ticketOwns; i++){
                if(Users[posU].tickets[i].game_id == _gameId){

                uint tickPos = Users[posU].tickets[i].ticketPos;
                
                Games[posG].tickets[tickPos].state = States.invaild;                           //change state to invalid

                Users[posU].tickets[i] = Games[posG].tickets[tickPos];            //copy the ticket info to Games[]

                emit TicketState(_userId, _gameId, i, Users[posU].tickets[i].state);

                }
            }
            return (true);
        }
         return (false);                                                                 //return false

    }
}