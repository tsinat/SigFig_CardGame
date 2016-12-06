import Deck from './deck';
import Card from './card';

(function() {
    //main execution 
    //game logic will go here!!
    let myDeck = new Deck();
    let myCards = myDeck.createCards();
    console.log(myDeck.shaffle());
    console.log(myDeck.getCard());
    console.log(myDeck.getCard());
    console.log(myDeck.getCard());
    console.log(myDeck.getCard());
    console.log(myDeck.getCard());
    console.log(myDeck.getCard());
    console.log(myDeck.getCard());
    console.log(myDeck.count());

})();
