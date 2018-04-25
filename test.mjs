//const assert = require("assert");
//const makeGreeting = require("./index.js");
// assert.equal
// Tests shallow, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ).
import assert from "assert";
import {makeGreeting} from "./index";

/*
Node.js contains support for ES Modules based upon the Node.js EP for ES Modules.

Not all features of the EP are complete and will be landing as both VM support and implementation is ready. Error messages are still being polished.

The --experimental-modules flag can be used to enable features for loading ESM modules.

Once this has been set, files ending with .mjs will be able to be loaded as ES Modules.
*/

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
console.log("Your test has passed!");
/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)    
*/
