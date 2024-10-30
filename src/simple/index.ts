import { Document } from "../document";
import { SimpleCharacter } from "./simple_character";

const doc = new Document();
for (const ch of "Title\n") {
  doc.addCharacter(new SimpleCharacter("green", true, true, ch));
}
for (const ch of "Subtitle\n\n") {
  doc.addCharacter(new SimpleCharacter("yellow", false, true, ch));
}
for (const ch of "Paragraph...\n") {
  doc.addCharacter(new SimpleCharacter("red", false, false, ch));
}

doc.print();
console.log(`Number of characters: ${doc.getCharactersCount()}`);
