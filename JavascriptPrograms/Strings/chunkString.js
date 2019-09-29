function chunk(str,n){
    let arr = [];
    for(let i=0;i<str.length;i+=n){
      arr.push(str.substr(i,n)) 
    }
    return arr;
  }
  console.log(chunk('woeijoajdofjaodjfdoajfo',2))