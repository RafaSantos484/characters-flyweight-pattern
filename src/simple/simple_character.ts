import { Character } from "../character";
import { Color } from "../types";

export class SimpleCharacter extends Character {
  private color: Color;
  private bold: boolean;
  private italic: boolean;

  constructor(color: Color, bold: boolean, italic: boolean, symbol: string) {
    super(symbol);

    this.color = color;
    this.bold = bold;
    this.italic = italic;
  }

  public getColor(): Color {
    return this.color;
  }
  public isBold(): boolean {
    return this.bold;
  }
  public isItalic(): boolean {
    return this.italic;
  }
}
