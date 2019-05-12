
var arr1 = []
function fun(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0 && arr[i+1] % 2 ===  0){
      arr1.push(arr[i]+ '-')
    }else{
      arr1.push(arr[i]);
    }
  }
  return arr1.join('')
}

console.log(fun('025468'));