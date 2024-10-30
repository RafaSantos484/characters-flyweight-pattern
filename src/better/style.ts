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

  static getStyleKey(color: Color, isBold: boolean, isItalic: boolean) {
    return `${color}-${isBold}-${isItalic}`;
  }

  public getStyleKey() {
    return Style.getStyleKey(this.color, this.isBold, this.isItalic);
  }
}
