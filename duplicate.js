let names = ['zahin', 'farwah', 'omor', 'zahin'];

function removeDuplicate(array){
    const unique = [];
    for (let i = 0; i<array.length; i++){
        const name = array[i];
        if (unique.includes(name) == false){
            unique.push(name);
        }
    }
    return unique;
}
console.log(removeDuplicate(names));