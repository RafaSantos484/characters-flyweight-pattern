import { Color } from "./types";
import { wrapBold, wrapColor, wrapItalic } from "./utils";

export abstract class Character {
  private symbol: string;

  constructor(symbol: string) {
    this.symbol = symbol;
  }

  public abstract getColor(): Color;
  public abstract isBold(): boolean;
  public abstract isItalic(): boolean;

  public print() {
    let chStr = this.symbol;
    if (this.isBold()) {
      chStr = wrapBold(chStr);
    }
    if (this.isItalic()) {
      chStr = wrapItalic(chStr);
    }
    chStr = wrapColor(chStr, this.getColor());

    process.stdout.write(chStr);
  }
}
