function addSplChar(str, char, splchar) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i]; 
        if (str[i] === char) {
            result += splchar; 
        }
    }

    return result; 
}

let inputString = "cat in the bag";
let result = addSplChar(inputString, "c", "@");
console.log(result); 


