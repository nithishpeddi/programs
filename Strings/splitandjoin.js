let result = (str)=>{
    var newst = str.toLowerCase().split(' ');
    console.log(newst);
    return newst.join('-');
  }
  console.log(result("js string exercises"));
  