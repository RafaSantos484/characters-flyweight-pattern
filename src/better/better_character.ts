import { Character } from "../character";
import { Color } from "../types";
import { StyleFactory } from "./style_factory";
import { Style } from "./style";

export class BetterCharacter extends Character {
  public style: Style;
  public symbol: string;

  constructor(
    color: Color,
    isBold: boolean,
    isItalic: boolean,
    symbol: string,
    styleFactory: StyleFactory
  ) {
    super();

    this.style = styleFactory.getStyle(color, isBold, isItalic);
    this.symbol = symbol;
  }

  public getColor(): Color {
    return this.style.color;
  }

  public isBold(): boolean {
    return this.style.isBold;
  }

  public isItalic(): boolean {
    return this.style.isItalic;
  }
}
