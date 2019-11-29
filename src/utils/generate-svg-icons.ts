import { writeFileSync } from 'fs';
import { compileFile } from 'pug';
import Deck from '../core/models/Deck';


const renderFn = compileFile("src/utils/svg.pug", {
  pretty: true,
  debug: false,
  inlineRuntimeFunctions: true
});

const deck = new Deck();
for (let card of deck) {
  writeFileSync(`public/icons/${card}.svg`, renderFn(card.toObject()));
}
