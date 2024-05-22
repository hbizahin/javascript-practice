let numbers = [23, 23, 34, 55, 66, 77, 99];
// console.log(Array.isArray(numbers))
// // Array check korte hole evhabe check korte hobe
// // otherwise eta object and array r moddhe gulay felbe

// // Concat:
// let newNumbers = [1, 2, 3];
// let newArray = newNumbers.concat(numbers);
// console.log(newArray);

// // include
// console.log(newArray.includes(3));

// // slice
// let partial = numbers.slice(2, 5);
// console.log(partial);

// splice
let newPartial = numbers.splice(2, 3, 55555)
// ekhane 5 means porer 3ta element bujhaise
// and ager array theke oigula removed hoiye jabe
// ai porer 55555 add hoiye jabe ager array te
console.log(newPartial)
console.log(numbers)
