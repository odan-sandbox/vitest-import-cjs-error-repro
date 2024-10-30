# vitest-import-cjs-error-repro

```bash
$ npm install
$ npm run test
```

Error message:

```
 FAIL  src/main.test.js [ src/main.test.js ]
SyntaxError: Cannot use import statement outside a module
 ❯ node_modules/example-deps/deps1.js:1:18
      1| module.exports = require("./deps2.js");
       |                  ^
      2|
      3| console.log("called deps1.js");

Module /path/to/vitest-import-cjs-error-repro/node_modules/example-deps/deps2.js:1 seems to be an ES Module but shipped in a CommonJS package. You might want to create an issue to the package "example-deps" asking them to ship the file in .mjs extension or add "type": "module" in their package.json.

As a temporary workaround you can try to inline the package by updating your config:

// vitest.config.js
export default {
  test: {
    server: {
      deps: {
        inline: [
          "example-deps"
        ]
      }
    }
  }
}
```
