export { parse } from "./lib/webidl2.js";
export { write } from "./lib/writer.js";
export { validate } from "./lib/validator.js";
export { WebIDLParseError } from "./lib/tokeniser.js";

export { tokenise } from "./lib/tokeniser.js";

import * as fs from 'fs';
import { tokenise } from "./lib/tokeniser.js";

const fileText = fs.readFileSync("Box2D.idl").toString();

const tokens = tokenise(fileText);

var out = '';
for(const token of tokens) {
  out += `[${token.type}]: ${token.value}\n`;
}
fs.writeFileSync('out.txt', out);