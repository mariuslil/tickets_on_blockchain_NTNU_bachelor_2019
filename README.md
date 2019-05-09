# Tickets on blockchain

This is a prototype "proof of consept" ticket system based on the ethereum blockchain.


# Installation guide
Check for Guide - installation.pdf for information how to install the software

# Scripts
Scripts requirements install truffle to run because it runs in the truffle console.

Run the scripts in this order:

1.createEventOrganizers.js for create a event Organizer

2.CreeateGames.js for create games (this need to be run after eventOrganizer.js because game need event organizer)

3.createUsers.js for creating three users

5.User1buys.js let the first user buy tickets

6.User2buys.js let the second user buy ticket

7.User3buys.js let the last user buy tickets

9.startGames.js change the game status to ongoing.

10.vaildate.js for vaildate all ticket to users (need game to start for run)

11.endedGames.js change the state of a game to ended

12.invalid.js for invalid all tickets to users (can be run anytime after users have bought tickets)

Opitonal:

getEventOrganizers.js prints out information about event organizers. Use this to check if event organizers were add correct

getGames.js prints out information about game and tickets. Uses this to check if games were add correct

getEventOrganizersGame to see which organizer is organizing the games

getUsers.js prints out information about the user. Uses this to check if users were add correct

getUsersTickets.js prints the information about ticket til users. Uses this to check if tickets were bought correct and the state of tickets
