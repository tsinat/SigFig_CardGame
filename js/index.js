import Deck from './deck';
import Card from './card';
import Player from './player';

(function() {
    //main execution
    //game logic will go here!!
    let player1 = new Player('Tsinat');
    let myDeck = new Deck();
    let myCards = myDeck.createCards();
    console.log(myDeck.shaffle());
    console.log(myDeck.deal());
    console.log(myDeck.deal());
    console.log(myDeck.deal());
    console.log(myDeck.deal());
    console.log(myDeck.deal());
    console.log(myDeck.deal());
    console.log(myDeck.deal());
    console.log(myDeck.cardCount());
    console.log(player1);
    console.log(player1.cards.push(myDeck.deal()));
    console.log(player1.cards.push(myDeck.deal()));
    console.log(player1.cardsValue());

})();
