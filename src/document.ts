import { Character } from "./character";

export class Document {
  private characters: Character[];

  constructor() {
    this.characters = [];
  }

  public addCharacter(character: Character) {
    this.characters.push(character);
  }

  public getCharactersCount() {
    return this.characters.length;
  }

  public print() {
    const boldCode = "\x1b[1m";
    const italicCode = "\x1b[3m";
    const endCode = "\x1b[0m";

    const colorsCodes = {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      white: "\x1b[37m",
    };

    for (const ch of this.characters) {
      let chStr = ch.symbol;
      if (ch.isBold()) {
        chStr = `${boldCode}${chStr}${endCode}`;
      }
      if (ch.isItalic()) {
        chStr = `${italicCode}${chStr}${endCode}`;
      }
      chStr = `${colorsCodes[ch.getColor()]}${chStr}${endCode}`;

      process.stdout.write(chStr);
    }
  }
}
