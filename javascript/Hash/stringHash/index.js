
function leftJoin(one, two) {
    let result = [];
  
    const keys = one.keys();
  
    for (let key of keys) {
      if (two.has(key)) {
        result.push([key, one.get(key), two.get(key)]); 
      }else {
          result.push([key, one.get(key), null]); 
  
      }
    }
  
    return result;
  }
