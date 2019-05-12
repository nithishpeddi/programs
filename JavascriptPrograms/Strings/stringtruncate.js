
var str3 = [];
// function truncate(str,n){
// var str1 = str.split(' ');
// for(var i=0;i<n;i++){

// str3.push(str1[i]);

// }
// return str3;
// }


let result = (str,n)=>{
  var str1 = str.split(' ');
  return str1.slice(0,n)
}
console.log(result('The quick brown fox jumps over the lazy dog', 4));

