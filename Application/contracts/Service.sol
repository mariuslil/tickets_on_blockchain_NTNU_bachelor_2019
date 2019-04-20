pragma solidity >=0.4.21 <0.6.0;

contract Service{
    
    struct myTicket{
        string owner_name; //the name of the ticket owner
        bool available; // check if the ticket is available or not
    }

    /*myTicket[] public tickets;

    function addTicket(string memory name,bool m_bool) public{
            myTicket memory newTicket = myTicket({
                onwer_name : name,
                available : m_bool
            });

        tickets.push(newTicket);*/
    }

    /*function getTicket(bool m_bool, string memory m_string) public returns(){
        t1 = myTicket(m_bool, m_string);
        return t1;
    }*/

}