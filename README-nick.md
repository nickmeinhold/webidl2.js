# Porting to Dart

## Steps so far

### Setup to tokenise Box2D.idl

- added a `launch.config`
- added `Box2D.idl` (from [box2d-wasm])
- exported `tokenise()` from `lib/tokeniser.js`
- imported `tokenise()` into `index.js` and added code to 
  - tokenise `Box2D.idl`
  - print & save the resulting tokens

### Dig deeper into Dart & JS differences

- added `test.js`

[box2d-wasm]: https://github.com/Birch-san/box2d-wasm