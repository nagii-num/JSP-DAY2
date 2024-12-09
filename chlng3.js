function findLargestnum(arr, n) {
    if (n < 1 || n > arr.length) {
      return "Invalid input";
    }
  
    arr.sort((a, b) => b - a);
  
    return arr[n - 1];
  }
  
  inputarray = [3, 4, 5, 6, 88];
  let result = findLargestnum(inputarray, 2);
  console.log(result); 
  
  let resulta = findLargestnum(inputarray, 4);
  console.log(resulta); 
  


  