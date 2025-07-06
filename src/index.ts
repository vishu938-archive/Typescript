// Annotations
let myName: string = "Vishal";
console.log(myName);

let age: number = 25;
let isUserLoggedIn: boolean = true;
console.log(isUserLoggedIn);

let fruits: string[];
fruits = ["banana", "apple", "grapes"];

let nullValue: null;
let notDefined: undefined = undefined;

// Function Parameter Type Annotations
function add(a: number, b: number) {
  return a + b;
}
console.log(add(230, 23));

// Function Return Type Annotations
function multiply(x: number, y: number): number {
  return x * y;
}

console.log(multiply(10, 20));

// Object Type Annotations
let employee: {
  eName: string;
  eId: number;
  eLocation: string;
  eCompany?: string;
};

employee = { eName: "Vishal", eId: 32, eLocation: "Bangalore" };

let num = 10;

