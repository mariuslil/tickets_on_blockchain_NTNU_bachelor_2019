pragma solidity >=0.4.22 <0.6.0;

/* TODO:
-Created a event for game and tickets
-Make a score variable in struct game
-Create a function for get all the available (true) ticket
-Create a struct for a owner of a ticket
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

    //Create a game in Game[] and then create the number of ticket in the game in Tickets[]
    function createGame(uint _Gameid, string memory _homeTeam, string memory _foreignTeam, uint _tickets, int _price ) public{
        game memory g = game(_Gameid, _homeTeam, _foreignTeam, _tickets);

        //Create number of ticket with _tickets in Tickets[], also include the same _Gameid as Games[] belong to
        for(uint i = 0; i <= g.number_of_tickets; i++){
            ticket memory t = ticket(i, _Gameid, true, _price);
            Tickets.push(t);
        }
        Games.push(g);
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