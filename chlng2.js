function replaceNumbers(str, char) {
    return str.replace(/\d/g, char);
  }
  
  let inputString = "arun@123";
  let result = replaceNumbers(inputString, "d");
  console.log(result); 
  
