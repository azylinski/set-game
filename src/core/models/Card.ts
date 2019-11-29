import { Nmbr, Smbl, Shading, Color } from './commons';


export default class Card {
  private number: Nmbr;
  private symbol: Smbl;
  private shading: Shading;
  private color: Color;

  constructor(number: Nmbr, symbol: Smbl, shading: Shading, color: Color) {
    this.number = number;
    this.symbol = symbol;
    this.shading = shading;
    this.color = color;
  }

  public get(feature:string): string {
    return this.toObject()[feature];
  }

  public toString(): string {
    return `${this.number}-${this.symbol}-${this.shading}-${this.color}`;
  }

  public toObject(): Record<string, string> {
    return {
      "Number": this.number,
      "Symbol": this.symbol,
      "Shading": this.shading,
      "Color": this.color,
    }
  }
}
