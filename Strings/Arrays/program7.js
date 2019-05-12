var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
let result = arr.filter((value,index,ar)=>{
  
  return ar.indexOf(value) === index
});

alert(result);