function sumofcommaLimitedString(str){

    let numbers = str.split(',');
    let sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    return sum;
}

inputString =  "1.5, 2, 44, 66, 12, 90";
result = sumofcommaLimitedString(inputString);
console.log(result);
