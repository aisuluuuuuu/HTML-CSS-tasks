console.log('Заданеие 1');
function palindrome(str) {
    
    console.log(str);
    console.log(str.toLowerCase().split(" ").join(""));

    const stringArr = str.toLowerCase().split('').reverse().join("").replace(/\s/g, "");
    
    console.log(stringArr);

    return str.toLowerCase().split(" ").join("") === stringArr;
}
console.log(palindrome('дед'));// === true
console.log(palindrome('ИскАть таКси'));// === true
console.log(palindrome('Крот'));// === false

function figure(str){
    console.log(str);
    const nambersArr=str.replace(/\D/g, "");
    return nambersArr;
}
console.log('');
console.log('Заданеие 2');
console.log(figure('2023 год'));            // 2023
console.log(figure('1 каштан, 0.5 банана')); // 105
console.log(figure('просто строка'));           // NaN
