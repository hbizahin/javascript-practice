function add(a, b) {
  const sum = a + b;
  return sum;
}

const output = add(5, 10);
console.log(output + 50);

// if default value added
function add(a, b = 5) {
  const new_sum = a + b;
  return new_sum;
}
console.log(add(5));

function nametype(first, last=''){
  const name = first +' '+ last;
  return name;
}
console.log(nametype('Hamza', 'Zahin'))
