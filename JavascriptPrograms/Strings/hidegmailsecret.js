function hell(str){
    var newst = str.split(' ')
    
  return newst[0].slice(0,4)+ '...' + '@'+ newst[1];
  }
  console.log(hell("Robin Singh from USA"));
  