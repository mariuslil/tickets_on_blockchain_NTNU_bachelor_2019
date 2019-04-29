pragma solidity >=0.4.22 <0.6.0;

contract Services{

    struct ticket{
        uint ticket_id;
        uint game_id;
        bool availbe;
    }

    /*
    TODO: make score in game
    */
    struct game{
        uint game_id;
        string homeTeam;
        string awayTeam;
        uint number_of_tickets;
    }

    game[] Games;
    ticket[] Tickets;

    /*
    TODO: create event for games and tickets
     */

    function createGame(uint _Gameid, string memory _homeTeam, string memory _awayTeam, uint _tickets ) public{
        game memory g = game(_Gameid, _homeTeam, _awayTeam, _tickets);

        for(uint i = 0; i <= g.number_of_tickets; i++){
            ticket memory t = ticket(i, _Gameid, true);
            Tickets.push(t);
        }
        Games.push(g);
    }

    function getTicket(uint _id) public view returns(uint, uint){
        ticket memory myTicket = Tickets[_id];
        return(myTicket.ticket_id, myTicket.game_id);
    }
}