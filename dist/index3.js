// object types
// object literals
var person = {
    firstName: "vishal",
    lastName: "vinayak",
    age: 25,
};
// console.log(person);
// factory function = objects as function return value
function printPerson() {
    return {
        city: "bangalore",
        name: "vishal",
        age: 20,
    };
}
var printUser = function (user) {
    return "".concat(user.name, ": ").concat(user.age, ": ").concat(user.location);
};
var laptop1 = {
    name: "Lenovo yoga",
    price: 75000,
    modelNo: "AXK4820",
};
// console.log(laptop1, "model year: ", laptop1.modelYear);
var laptop2 = {
    name: "Lenovo legion",
    price: 105000,
    modelNo: "ASDF4820",
    modelYear: 2022,
};
laptop2.modelNo = "EUT48K38";
var employee1 = {
    eName: "Vishal",
    eId: 3920,
    eTeam: "Google I/O",
};
// employee1.eId = 49595; // gives ERROR
console.log(employee1);
