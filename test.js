const assert = require("assert");

// assert.equal
// Tests shallow, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ).

function makeGreeting(name = "world") {
        return "Hello " + name + "!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
console.log("Your test has passed!");
/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)    
*/
