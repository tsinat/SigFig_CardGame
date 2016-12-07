export default class Player {
    constructor(name) {
        this.name = name;
        this.points = null;
        this.cards = []
    }
    cardsValue() {
        let sum = 0, i;
        if(this.cards.length) {
            for(i = 0; i < this.cards.length; i++) {
                sum += this.cards[i].value;
            }
            return sum;
        } else return null;
    }
}
