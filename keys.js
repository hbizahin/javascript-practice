const glass = { name: "Zahin", color: "Red", price: 150, isCleaned: true };
console.log(glass);


const keys = Object.keys(glass)
console.log(keys)
// [ 'name', 'color', 'price', 'isCleaned' ]

delete glass.isCleaned
console.log(glass)
