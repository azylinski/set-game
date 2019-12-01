import Combinatorics from "js-combinatorics";
import { Card } from './Card';
import { Nmbr, Smbl, Shading, Color } from './commons';


export class Deck implements Iterable<Card> {
  cards: Array<Card> = [];

  constructor(shuffle?: CallableFunction) {
    this.initCards();
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
