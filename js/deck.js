import Card from './card';

export default class Deck {
    constructor() {
        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	    this.deck = [];
    }

    createCards() {
        let i, j;
        for(i = 0; i < this.suits.length; i++ ) {
            for(j = 0; j < this.names.length; j++ ) {
                this.deck.push( new Card( j+1, this.names[j], this.suits[i] ) );
            }
        }
        return this.deck;
    }

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

    cardCount() {
        return this.deck.length;
    }

    addCard() {

    }

    deal() {
        if (this.deck.length > 0) {
            return this.deck.shift();
        }
        else return null;
    }
    stackCombine(deck) {
        return [
            ...deck,
            this.cards
        ];
    }
}
