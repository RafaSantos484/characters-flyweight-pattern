import { Document } from "../document";
import { Color } from "../types";
import { loremIpsum } from "../utils";
import { SimpleCharacter } from "./simple_character";

const doc = new Document();
for (const ch of "Title\n") {
  doc.addCharacter(new SimpleCharacter(Color.Green, true, true, ch));
}
for (const ch of "Subtitle\n\n") {
  doc.addCharacter(new SimpleCharacter(Color.Yellow, false, true, ch));
}
for (const ch of loremIpsum) {
  doc.addCharacter(new SimpleCharacter(Color.Blue, false, false, ch));
}

doc.print();
console.log(`Number of characters: ${doc.getCharactersCount()}`);
