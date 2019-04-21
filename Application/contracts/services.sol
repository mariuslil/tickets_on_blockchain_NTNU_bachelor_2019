pragma solidity >=0.4.22 <0.6.0;

contract Services{
    struct ticket{
        uint ticket_id;
        string name;
        bool available;
    }
    
    mapping(uint => ticket) tickets;
    uint TicketsKey = 0;
    uint maxTickets = 10; //testing
    
    function addTciket(uint _id, string memory _name, bool _available) public{
        if(TicketsKey >= maxTickets){
        tickets[TicketsKey] = ticket(_id, _name, _available);
        TicketsKey++;
        } 
    }

    function getTicket() public{
        
    }
}