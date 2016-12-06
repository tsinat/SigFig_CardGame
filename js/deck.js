import Card from './card';

export default class Deck {
    constructor() {
        this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	    this.cards = [];
    }

    createCards() {
        let i, j;
        for(i = 0; i < this.suits.length; i++ ) {
            for(j = 0; j < this.names.length; j++ ) {
                this.cards.push( new Card( j+1, this.names[j], this.suits[i] ) );
            }
        }
        return this.cards;
    }

    shaffle() {
       let i, j, k, temp;
       let n = this.cards.length;
       for (i = 0; i < n; i++) {
           for (j = 0; j < n; j++) {
               k = Math.floor(Math.random() * n);
               temp = this.cards[j];
               this.cards[j] = this.cards[k];
               this.cards[k] = temp;
           }
       }
       return this.cards;
    }

    count() {
        return this.cards.length;
    }

    addCard() {
        
    }

    getCard() {
        if (this.cards.length > 0) {
            return this.cards.shift();
        }
        else return null;
    }
}
