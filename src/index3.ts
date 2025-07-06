// object types
// object literals
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "vishal",
  lastName: "vinayak",
  age: 25,
};

// console.log(person);

// factory function = objects as function return value
function printPerson(): { name: string; age: number; city: string } {
  return {
    city: "bangalore",
    name: "vishal",
    age: 20,
  };
}

// console.log(printPerson());

// TYPE ALIAS.......
type User = {
  name: string;
  age: number;
  location: string;
};

const printUser = (user: User) => {
  return `${user.name}: ${user.age}: ${user.location}`;
};

// console.log(printUser({ name: "vishal", age: 25, location: "Bangalore" }));

// Optional properties
type Laptop = {
  name: string;
  modelNo: string;
  modelYear?: number;
  price: number;
};

const laptop1: Laptop = {
  name: "Lenovo yoga",
  price: 75000,
  modelNo: "AXK4820",
};

// console.log(laptop1, "model year: ", laptop1.modelYear);

const laptop2: Laptop = {
  name: "Lenovo legion",
  price: 105000,
  modelNo: "ASDF4820",
  modelYear: 2022,
};

laptop2.modelNo = "EUT48K38";

// console.log(laptop2);

// readonly property in TYPE ALIAS
type Employee = {
  eName: string;
  readonly eId: number;
  eTeam: string;
};

const employee1: Employee = {
  eName: "Vishal",
  eId: 3920,
  eTeam: "Google I/O",
};

// employee1.eId = 49595; // gives ERROR

console.log(employee1);
