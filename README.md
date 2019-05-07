# Tickets on blockchain

This is a prototype "proof of consept" ticket system based on the ethereum blockchain.


# Installation guide
Check for Guide - installation.pdf for information how to install the software

# Scripts
Scripts requirements install truffle to run because it runs in the truffle console.

Run the scripts in this order:
1.eventOrganizer.js for create a event Organizer
2.games.js for create games (this need to be run after eventOrganizer.js because game need event organizer)
4.getTicket.js is prints out information about game and tickets. Uses this to check if everything is correct.
3.user.js for creating three test users
4.getUser.js prints out information about the user. Uses this to check if everything is correct.
5.User1buys.js let the first user buy tickets
6.User2buys.js let the second user buy ticket
7.User3buys.js let the last user buy tickets
Optional: run getTicket.js and getUser.js for check 
8.userTickets.js prints the information about ticket til users. Uses this to check if everything is correct.
9.start.js starte the games, change the game status to ongoing.
optional: run getTicket.js
10.vaildate.js for vaildate all ticket to users
optional:run getTicket.js and userTickets.js
11.invalid.js for invalid all tickets to users
optional: run getTicket.js and userTickets.js

