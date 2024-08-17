// normal function
function add(a, b) {
  return a + b;
}

// variable type function
const add2 = function (a, b) {
  return a + b;
};

// arrow function
const add3 = (a, b) => a + b;

const sum = add3(5, 10);
console.log(sum);
