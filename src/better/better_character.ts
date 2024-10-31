import { Character } from "../character";
import { Color } from "../types";
import { StyleFactory } from "./style_factory";
import { Style } from "./style";

export class BetterCharacter extends Character {
  public style: Style;

  constructor(
    color: Color,
    isBold: boolean,
    isItalic: boolean,
    symbol: string
  ) {
    super(symbol);

    const styleFactory = StyleFactory.getInstance();
    this.style = styleFactory.getStyle(new Style(color, isBold, isItalic));
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
