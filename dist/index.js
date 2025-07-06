"use strict";
// Annotations
let myName = "Vishal";
console.log(myName);
let age = 25;
let isUserLoggedIn = true;
console.log(isUserLoggedIn);
let fruits;
fruits = ["banana", "apple", "grapes"];
let nullValue;
let notDefined = undefined;
// Function Parameter Type Annotations
function add(a, b) {
    return a + b;
}
console.log(add(230, 23));
// Function Return Type Annotations
function multiply(x, y) {
    return x * y;
}
console.log(multiply(10, 20));
// Object Type Annotations
let employee;
employee = { eName: "Vishal", eId: 32, eLocation: "Bangalore" };
let num = 10;
