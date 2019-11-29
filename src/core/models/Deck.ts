import Combinatorics from "js-combinatorics";
import Card from './Card';
import { Nmbr, Smbl, Shading, Color } from './commons';


export default class Deck implements Iterable<Card> {
    cards: Array<Card> = [];
    it: number = 0; // iterator/pointer of next Card
  
    constructor(shuffle?: CallableFunction) {
      this.initCards();
      this.it = 0;
  
      if (shuffle) this.cards = shuffle(this.cards);
    }
  
    get(key: number): Card {
      return this.cards[key];
    }
  
    *[Symbol.iterator](): Iterator<Card> {
      for (let card of this.cards) yield card;
    }
  
    private initCards(): void {
      this.cards = [];
  
      // let features = [Number, Symbol, Shading, Color];
      let cp = Combinatorics.cartesianProduct(
        Object.values(Nmbr),
        Object.values(Smbl),
        Object.values(Shading),
        Object.values(Color),
      );
  
      for (let args of cp.toArray()) {
        this.cards.push(new Card(...args));
      }
    }
  }