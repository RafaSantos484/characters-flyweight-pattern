import { Color } from "../types";

export class Style {
  public color: Color;
  public isBold: boolean;
  public isItalic: boolean;

  constructor(color: Color, isBold: boolean, isItalic: boolean) {
    this.color = color;
    this.isBold = isBold;
    this.isItalic = isItalic;
  }

  public equals(style: Style) {
    return (
      this.color === style.color &&
      this.isBold === style.isBold &&
      this.isItalic === style.isItalic
    );
  }

  public toString() {
    return `${this.color} ${this.isBold} ${this.isItalic}`;
  }
}
