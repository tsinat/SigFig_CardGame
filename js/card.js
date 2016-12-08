/*
the card class creates a single card every time it is instantiated
it accepts value, name and suit and create a card using the constructor
and it will have one method on it that could be called to draw a card in the DOM.
*/
export default class Card {
    constructor(value, name, suit){
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
    
    // method to graphically draw the card in the DOM
    drawCard(card) {
        //this method will recieve a card object with the name value and suit
        // and depending on the parrametes passed we can draw the card in canvas
        //or other DOM elements
    }
}
