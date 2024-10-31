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
    for (const ch of this.characters) {
      ch.print();
    }
  }
}
