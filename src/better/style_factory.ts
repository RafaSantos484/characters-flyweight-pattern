import { Color } from "../types";
import { Style } from "./style";

export class StyleFactory {
  private static instance: StyleFactory | null = null;
  private cache: Style[];

  constructor() {
    this.cache = [];
  }

  public static getInstance() {
    if (!StyleFactory.instance) {
      StyleFactory.instance = new StyleFactory();
    }
    return StyleFactory.instance;
  }

  public getStyle(color: Color, isBold: boolean, isItalic: boolean) {
    const newStyle = new Style(color, isBold, isItalic);
    const style = this.cache.find((s) => s.equals(newStyle));
    if (!!style) {
      return style;
    }

    console.log(`Saving style ${newStyle.toString()} in cache`);
    this.cache.push(newStyle);
    return newStyle;
  }
}
