// INTERSECTION TYPES.......................

type Company = {
  cName: string;
  cLocation: string;
};

type Employees = {
  eName: string;
  readonly eId: number;
  eSalary?: number;
};

type EmployeeDetails = Company & Employees;

const emp: EmployeeDetails = {
  cName: "Google",
  cLocation: "California",
  eId: 4200,
  eName: "Vishal",
  eSalary: 19494044,
};

// console.log(emp);

const emp1: EmployeeDetails = {
  cName: "Google",
  cLocation: "California",
  eId: 4200,
  eName: "Vishal",
};

// console.log(emp1);

// UNION TYPES .............

type Car = {
  cName: string;
  cSegment: string;
};

type CarDetails = {
  cModel: string;
  cModelYear: number;
  cPrice: number;
};

type estimatedCarDetails = Car | CarDetails;

function buyCar(car: Car | CarDetails) {
  return car;
}

// console.log(buyCar({ cName: "Tesla", cSegment: "Electric", cPrice: 4520000 }));

const items: (number | string)[] = [1, 3, 4, "combined", "array"];
console.log(items);

// LITERAL TYPES...........

let color: "red" | "green" | "yellow";
color = "red";
// color = "blue";  // invalid

let isAuthenticated: true | false;
isAuthenticated = true;
// isAuthenticated = "authenticated"; // invalid

console.log(isAuthenticated);

let primeNo: 2 | 3 | 5 | 7;
primeNo = 5;
// primeNo = 10;
// primeNo = 11;



