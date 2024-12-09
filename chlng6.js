function missingNumbers(arr){
    let missingNumbers=[];
    arr.sort((a, b) => a -b);
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++){
        if (!arr.includes(i)){
            missingNumbers.push(i);

        }
    }
    return missingNumbers;
}

inputarray = [68, 71, 69, 73];
result=missingNumbers(inputarray);
console.log(result);
