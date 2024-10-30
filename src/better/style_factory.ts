import { Color } from "../types";
import { Style } from "./style";

export class StyleFactory {
  private cache: { [key: string]: Style };

  constructor() {
    this.cache = {};
  }

  public getStyle(color: Color, isBold: boolean, isItalic: boolean) {
    const styleKey = Style.getStyleKey(color, isBold, isItalic);
    if (!this.cache[styleKey]) {
      console.log(`Saving style ${styleKey} in cache`);
      this.cache[styleKey] = new Style(color, isBold, isItalic);
    }

    return this.cache[styleKey];
  }
}
