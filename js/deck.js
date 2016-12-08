import Card from './card';

/*
Deck class instanciates an object names, suits and empty array of cards,
it has methods that would create new decks, shaffle the whole deck, count the deck's left
and a deal method if we want to get the card on the top of the deck
*/
export default class Deck {
    constructor() {
        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	    this.deck = [];
    }

    // a method to create a new deck by creating single card in every loop
    createDeck() {
        let i, j;
        for(i = 0; i < this.suits.length; i++ ) {
            for(j = 0; j < this.names.length; j++ ) {
                this.deck.push( new Card( j+1, this.names[j], this.suits[i] ) );
            }
        }
        return this.deck;
    }

    //shaffles the whole deck
    shaffle() {
       let i, j, k, temp;
       let n = this.deck.length;
       for (i = 0; i < n; i++) {
           for (j = 0; j < n; j++) {
               k = Math.floor(Math.random() * n);
               temp = this.deck[j];
               this.deck[j] = this.deck[k];
               this.deck[k] = temp;
           }
       }
       return this.deck;
    }

    // when ever we wanted to know the deck count
    cardCount() {
        return this.deck.length;
    }

    // to pull the card which is in the top of the deck
    deal() {
        if (this.deck.length > 0) {
            return this.deck.shift();
        }
        else return null;
    }

    // if you want to combine to decks together
    stackCombine(deck) {
        return [
            ...deck,
            this.cards
        ];
    }
}
