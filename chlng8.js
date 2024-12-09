function groupAndandAlphabeticalOrder(arr) {
    let groups = {};
  
    arr.forEach(str => {
      let initial = str[0];
      if (!groups[initial]) {
        groups[initial] = [];
      }
      groups[initial].push(str);
    });
  
    for (let initial in groups) {
      console.log(`[ ${groups[initial].join(', ')} ]`);
    }
  }
  

  array = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];
  result =groupAndandAlphabeticalOrder(array);
  
  
  
