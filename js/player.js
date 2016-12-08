/*
Player class instanciates an object with the passed name,
we can create as many players as we wanted depending on the game that
we implement.
Player class has one method that calculates the total value on the cards with a single plyer.
*/

export default class Player {
    constructor(name) {
        this.name = name;
        this.points = null;
        this.cards = []
    }

    // calculates the sum of values with single player
    cardsValue() {
        let sum = 0, i;
        if(this.cards.length) {
            for(i = 0; i < this.cards.length; i++) {
                sum += this.cards[i].value;
            }
            this.points = sum;
            return sum;
        } else return null;
    }
}
