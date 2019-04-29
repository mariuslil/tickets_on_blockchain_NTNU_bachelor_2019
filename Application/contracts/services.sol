pragma solidity >=0.4.22 <0.6.0;

contract Services{

    struct ticket{
        uint id;
    }

    ticket[] Tickets;

    function createTicket(uint _id) public{
        //Ticket[_id].id=_id;
        //Ticket[_id].events=_events;
        ticket memory t = ticket(_id);
        Tickets.push(t);
    }

    function getTicket(uint _id) public view returns(uint){
        ticket memory myTicket = Tickets[_id];
        return(myTicket.id);
    }
}