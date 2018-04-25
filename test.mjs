import assert from "assert";
import {makeGreeting} from "./index";

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Zach"), "Hello Zach!");
assert.equal(makeGreeting(), "¡Hola mundo!");
console.log("Your test has passed!");
/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)    
*/
