const str = 'I am Zahin';
// let reverse = ''
// for (let i=str.length-1; i>=0; i--){
//     console.log(str[i])
//     reverse+=str[i]
// }
// console.log(reverse);

function reverseWords(string){
    let words = string.split(' ')
    result=[];
    for (let i=words.length-1; i>=0; i--){
        result.push(words[i]);
    }
    return result;
}
console.log(reverseWords(str));