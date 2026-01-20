"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. String
let string = "String";
// 2. Number
let number = 45;
// 3. Boolean
let bool = false;
let bool2 = true;
// 4. Array
let numbers = [1, 2, 3, 4, 5];
// 5. Any
let temp;
temp = "temp";
temp = 45;
temp = false;
// 6. Return Type Annotations With Parameter Of Function
const sum = (a, b) => {
    return a + b;
};
// 7. Union Types
function printId(id) {
    console.log(`Id is ${id}`);
}
