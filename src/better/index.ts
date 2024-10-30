import { Document } from "../document";
import { BetterCharacter } from "./better_character";
import { StyleFactory } from "./style_factory";

const doc = new Document();
const styleFactory = new StyleFactory();
for (const ch of "Title\n") {
  doc.addCharacter(new BetterCharacter("green", true, true, ch, styleFactory));
}
for (const ch of "Subtitle\n\n") {
  doc.addCharacter(
    new BetterCharacter("yellow", false, true, ch, styleFactory)
  );
}
for (const ch of "Paragraph...\n") {
  doc.addCharacter(new BetterCharacter("red", false, false, ch, styleFactory));
}

doc.print();
console.log(`Number of characters: ${doc.getCharactersCount()}`);
