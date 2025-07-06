// default param in function
function defaultFunc(person: string = "Vishal") {
  return `Hello ${person}`;
}

console.log(defaultFunc());
console.log(defaultFunc("Vinayak"));

// regular function - return annotation
function multiply(x: number, y: number): number {
  return x * y;
}

console.log(multiply(3, 4));

// arrow function - return annotation
const add1 = (x: number, y: number): number => x + y;

console.log("addtion ", add1(4, 40));

// void type
function printMessage(message: string) {
  console.log(`this is the print ${message}`);
}
printMessage("message");

// array types - creation
const laptops: string[] = ["lenovo", "yoga", "macbook"];
const nums: number[] = [4, 5, 32];
nums.push(200);
console.log("nums", nums);

const languages: Array<string> = ["c", "c++", "javascript", "python"];
console.log(languages);

// multi dimensional arrays
const singleDi: number[] = [1, 2, 3];
const doubleDi: number[][] = [[438, 49, 4]];
const tripleDi: number[][][] = [[[438, 49, 4]]];

// console.log(singleDi);
// console.log(doubleDi);
// console.log(tripleDi);
















