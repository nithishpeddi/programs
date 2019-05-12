var str1 = '';

function repeat_string(str,n){
  for(var i=0;i<n;i++){
    str1 = str1 + ' ' + str;
  }
  return str1;
}
console.log(repeat_string('a', 4)); 