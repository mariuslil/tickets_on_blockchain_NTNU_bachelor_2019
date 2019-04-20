pragma solidity >=0.4.21 <0.6.0;

contract Service{
    
    struct myTicket{
        string owner_name; //the name of the ticket owner
        bool available; // check if the ticket is available or not
    }

    myTicket[] public tickets;

    function getTicket(uint id) public view returns(string memory, bool){
            myTicket memory ticket = tickets[id];
            return(ticket.owner_name, ticket.available);
        }
    /*

    /*function getTicket(bool m_bool, string memory m_string) public returns(){
        t1 = myTicket(m_bool, m_string);
        return t1;
    }*/

}