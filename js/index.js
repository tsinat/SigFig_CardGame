import Deck from './deck';
import Player from './player';

//main execution
//game logic will go here!!

(() => {
    /*
    it all depends on what kind of game we want to play and the number of players
    we will need function's that check the game status based on the players interaction
    I am assuming the user will interact from user interface weather to play, stand or if it's a draw
    */
    let stand = false;
    const myDeck = new Deck();
    myDeck.createDeck();
    myDeck.shaffle();
    const player1 = new Player('Tsinat');
    const player2 = new Player('Dealer');

    // initial cards to player one
    player1.cards.push(myDeck.deal());
    player1.cards.push(myDeck.deal());

    // initial cards to player two
    player2.cards.push(myDeck.deal());
    player2.cards.push(myDeck.deal());

    const checkGame = (player1, player2, ...rest ) => {
        // in this function we can check the card values of each player and check if
        // the game is over or if they should play
    }

    // play method will be triggered by user interaction
    //it will accept a player and add on card to his/her hand
    const play = (player) => {
        player.cards.push(myDeck.deal());
        checkGame(player1.cards.value, player2.cards.value);
    }

    checkGame(player1.cards.value, player2.cards.value);
})();
