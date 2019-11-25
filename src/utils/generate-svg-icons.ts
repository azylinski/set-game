import * as fs from 'fs';
const pug = require("pug");
import { Deck } from '../core/model';


const renderFn = pug.compileFile("src/utils/svg.pug", {
  pretty: true,
  debug: false,
  inlineRuntimeFunctions: true
});
const deck = new Deck();

for (let card of deck) {
  const fn = `public/icons/${card}.svg`;
  fs.writeFileSync(fn, renderFn(card.toObject()));
}
