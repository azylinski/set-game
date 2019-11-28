import Combinatorics from "js-combinatorics";


enum Nmbr {
  One = "one",
  Two = "two",
  Three = "three",
}

enum Smbl {
  Diamond = "diamond",
  Squiggle = "squiggle",
  Oval = "oval",
}

enum Shading {
  Solid = "solid",
  Striped = "striped",
  Open = "open",
}

enum Color {
  Red = "red",
  Green = "green",
  Purple = "purple",
}


export type GameState = {
  deck: Deck,
  board: Array<number>,
};


class Card {
  protected number: Nmbr;
  protected symbol: Smbl;
  protected shading: Shading;
  protected color: Color;

  constructor(number: Nmbr, symbol: Smbl, shading: Shading, color: Color) {
    this.number = number;
    this.symbol = symbol;
    this.shading = shading;
    this.color = color;
  }

  public toString(): string {
    return `${this.number}-${this.symbol}-${this.shading}-${this.color}`;
  }

  public toObject(): object {
    return {
      "Number": this.number,
      "Symbol": this.symbol,
      "Shading": this.shading,
      "Color": this.color,
    }
  }
}


export class Deck implements Iterable<Card> {
  cards: Array<Card> = [];
  it: number = 0; // iterator/pointer of next Card

  constructor() {
    this.initCards();
    this.it = 0;
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

    // shuffle
  }

  private shuffle(): void {}

  // // pick and return card; inc iterator(it)
  // draw()
}


/*
interface Board {
}


interface Arbiter {
  // is Set
  check(...cards) -> boolean;
}
*/