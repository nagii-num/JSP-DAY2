function mergeArrays(arr1,arr2) {

    mergeArrays=arr1.concat(arr2)
    mergeArrays.sort((a, b) => a -b);
    return mergeArrays;

}
inputArray1 =[1,4,6]
inputArray2 =[2,5,3]
result=mergeArrays(inputArray1,inputArray2);
console.log(result);

