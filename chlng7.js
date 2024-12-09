function sumofTwolargestnumbers(arr){
    if (arr.length < 2){
        return
    }
    arr.sort((a, b) => b -a);
    return arr[0] + arr[1];
}

inputarray = [32, 66, 80, 120, 45];
result=sumofTwolargestnumbers(inputarray);
console.log(result);
