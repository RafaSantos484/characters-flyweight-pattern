import { Color } from "./types";

export abstract class Character {
  public symbol: string = "";

  abstract getColor(): Color;
  abstract isBold(): boolean;
  abstract isItalic(): boolean;
}
