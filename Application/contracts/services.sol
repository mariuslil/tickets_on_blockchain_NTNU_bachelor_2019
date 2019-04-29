pragma solidity >=0.4.22 <0.6.0;

/* TODO:
-Created a event for game and tickets
-Make a score variable in struct game
*/

contract Services{

    struct ticket{
        //the id of the ticket
        uint ticket_id;
        //the id of game to the ticket
        uint game_id;
        //whatever if ticket is available
        bool available;
    }

    /*
    TODO: make score in game
    */
    struct game{
        //the id of game
        uint game_id;
        //name of the home team
        string homeTeam;
        //the name of foreign team
        string foreignTeam;
        uint number_of_tickets;
    }

    //all Games
    game[] Games;

    //all Tickets
    ticket[] Tickets;

    //Create a game in Game[] adn then create the number of ticket in the game in Tickets[]
    function createGame(uint _Gameid, string memory _homeTeam, string memory _foreignTeam, uint _tickets ) public{
        game memory g = game(_Gameid, _homeTeam, _foreignTeam, _tickets);

        for(uint i = 0; i <= g.number_of_tickets; i++){
            ticket memory t = ticket(i, _Gameid, true);
            Tickets.push(t);
        }
        Games.push(g);
    }

    //Return ticket_id and game_id by ticket_id in Tickets[]
    function getTicket(uint _id) public view returns(uint, uint){
        ticket memory myTicket = Tickets[_id];
        return(myTicket.ticket_id, myTicket.game_id);
    }
}