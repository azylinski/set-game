import Combinatorics from "js-combinatorics";


/*
export const FEATURES = {
  Types: ["Number", "Symbol", "Shading", "Color"],
  Names: {
    Numbers: ["one", "two", "three"],
    Symbols: ["diamond", "squiggle", "oval"],
    Shadings: ["solid", "striped", "open"],
    Colors: ["red", "green", "purple"]
  },
  Chars: {
    Numbers: ["1", "2", "3"],
    Symbols: ["d", "s", "o"],
    Shadings: ["S", "T", "O"],
    Colors: ["r", "g", "p"]
  }
};
*/


export enum Number {
  One = "1",
  Two = "2",
  Three = "3",
}

export enum Symbol {
  Diamond = "d",
  Squiggle = "s",
  Oval = "o",
}

enum Shading {
  Solid = "S",
  Striped = "T",
  Open = "O",
}

enum Color {
  Red = "r",
  Green = "g",
  Purple = "p",
}


class Card {
  protected number: Number;
  protected symbol: Symbol;
  protected shading: Shading;
  protected color: Color;

  constructor(number: Number, symbol: Symbol, shading: Shading, color: Color) {
    this.number = number;
    this.symbol = symbol;
    this.shading = shading;
    this.color = color;
  }

  public toString():string {
    return `${this.number}${this.symbol}${this.shading}${this.color}`;
  }
}


export class Deck {
  cards: Array<Card> = [];
  it: number = 0; // iterator/pointer of next Card

  constructor() {
    this.initCards();
    this.it = 0;
  }

  private initCards(): void {
    this.cards = [];

    // let features = [Number, Symbol, Shading, Color];
    let cp = Combinatorics.cartesianProduct(
      Object.values(Number),
      Object.values(Symbol),
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