const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;
// single parameter
const getAge = (person) => person.age;
const student = { name: "Zahin", age: 22 };
const age = getAge(student);
console.log(age);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());
