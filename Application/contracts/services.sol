pragma solidity >=0.4.22 <0.6.0;

/* TODO:
-Make a score variable in struct game - May?
-Create a struct for a owner of a ticket
-Create function for buy ticket with owner
-Create function for vailedate ticket
-Create function create a Owners
-Create struct season - may?
-Create function create season - may?
-Create function get list over available Tickets
*/

contract Services{

    struct ticket{
        //the id of the ticket
        uint ticket_id;
        //the id of game to the ticket
        uint game_id;
        //if ticket is available or not
        bool available;
        //the price of the ticket, inn kr
        int price;
        //vailedate if ticket is used or not
        bool vaildate;
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
        uint[] ticket_own;
    }

    //all Owners
    owner[] Owners;

    //all Games
    game[] Games;

    //all Tickets
    ticket[] Tickets;

    event CreateGame(uint _GameId, string _homeTeam, string _foreignTeam, uint _tickets);

    event CreateTicket(uint _ticketId, uint _GameId, bool _available, int _price, bool _vaildate);

    event CreateOwner(uint _ownerId, string  _name, address _addr, int _mobile, uint[]  _ticketOwns);

    function createOwner(uint _ownerId, string memory _name, address _addr, int _mobile, uint[] memory _ticketOwns) public returns(bool){
        require(Owners[_ownerId].owner_id != _ownerId, "The owner id is already beging used");
        require(Owners[_ownerId].addr != _addr, "The address is already begin used");
        owner memory o = owner(_ownerId, _name, _addr, _mobile, _ticketOwns);
        Owners.push(o);
        emit CreateOwner(_ownerId, _name, _addr, _mobile, _ticketOwns);
        return true;
    }

    //Create a game in Game[] and then create the number of ticket in the game in Tickets[]
    //returns if function can push Game and ticket to memory
    function createGame(uint _Gameid, string memory _homeTeam, string memory _foreignTeam, uint _tickets, int _price ) public returns(bool){
        require(Games[_Gameid].game_id != _Gameid, "The game already exits");
        game memory g = game(_Gameid, _homeTeam, _foreignTeam, _tickets);
        
        //Create number of ticket with _tickets in Tickets[], also include the same _Gameid as Games[] belong to
        for(uint i = 0; i <= g.number_of_tickets; i++){
            ticket memory t = ticket(i, _Gameid, true, _price, false);
            Tickets.push(t);
            emit CreateTicket(i, _Gameid, true, _price, false);
        }
        Games.push(g);
        emit CreateGame(_Gameid, _homeTeam, _foreignTeam, _tickets);
        return true;
    }

    //Return ticket_id and game_id by ticket_id in Tickets[]
    function getTicket(uint _id) public view returns(uint, uint, int){
        ticket memory myTicket = Tickets[_id];
        return(myTicket.ticket_id, myTicket.game_id, myTicket.price);
    }

    //Return number of ticket available in a game
    function getTicketAvailable(uint _Gameid) public view returns(int){
        game  memory g = Games[_Gameid];
        int counter = 0;
        for(uint i = 0; i <= g.number_of_tickets; i++){
            ticket memory myTicket = Tickets[i];
            if(myTicket.available == true && myTicket.game_id == g.game_id){
                counter++;
            }
        }
        return (counter-1);
    }
}