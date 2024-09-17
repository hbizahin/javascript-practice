const products = [
    {name: "apple", price: 500, color: "Red"},
    {name: "samsung", price: 50, color: "Green"},
    {name: "Oppo", price: 2, color: "Blue"},
    {name: "Google", price: 10, color: "Orange"},
]

const brands = products.map(product => product.name);
console.log(brands);
// forEach

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

// filter
const cheap = products.filter(product => product.price <= 50);
console.log(cheap);

// find (it will return only the first element it finds)
const prices = products.find(product => product.name.includes('a'));
console.log(prices);