import { Character } from "../character";
import { Color } from "../types";

export class SimpleCharacter extends Character {
  private color: Color;
  private bold: boolean;
  private italic: boolean;

  public symbol: string;

  constructor(color: Color, bold: boolean, italic: boolean, symbol: string) {
    super();

    this.color = color;
    this.bold = bold;
    this.italic = italic;
    this.symbol = symbol;
  }

  public getColor() {
    return this.color;
  }

  public isBold() {
    return this.bold;
  }

  public isItalic() {
    return this.italic;
  }
}
