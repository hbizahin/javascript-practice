// const zahin = 50;
// const farwah = 55;
// const omor = 33;

// if (zahin>farwah && zahin>omor){
//     console.log('Zahin maximum')
// }
// else if (farwah>zahin && farwah>omor){
//     console.log('Farwah maximum')
// }
// else{
//     console.log('Omor maximum')
// }

// console.log(Math.max(zahin, farwah, omor));

let numbers = [22, 33, 55, 66, 89];
function maxInArray(numbers){
    let largest = numbers[0]
    for (let i=0; i<numbers.length; i++){
        let element = numbers[i]
        if (element>largest){
            largest = element;
        }
    }
    return largest;
}

console.log(maxInArray(numbers));