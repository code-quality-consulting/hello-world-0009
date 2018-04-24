const assert = require("assert");
const makeGreeting = require("./index.js");
// assert.equal
// Tests shallow, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ).


assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
console.log("Your test has passed!");
/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)    
*/
