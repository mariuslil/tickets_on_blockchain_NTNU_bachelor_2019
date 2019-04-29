pragma solidity >=0.4.22 <0.6.0;

contract Services{

    struct ticket{
        uint ticket_id;
        string owner;
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

    function createGame(uint _id, string memory _homeTeam, string memory _awayTeam, uint _tickets) public{
        game memory g = game(_id, _homeTeam, _awayTeam, _tickets);
        Games.push(g);
    }

    function createTicket(uint _id, string memory _owner) public{
        ticket memory t = ticket(_id, _owner);
        Tickets.push(t);
    }

    function getTicket(uint _id) public view returns(uint, string memory){
        ticket memory myTicket = Tickets[_id];
        return(myTicket.ticket_id, myTicket.owner);
    }
}