let str1 = '';
let result = (str)=>{
for(var i=0;i<str.length;i++){
  if(str[i] === str[i].toUpperCase()){
    str1 = str1+ str[i].toLowerCase();
  }
  else {
    str1 = str1+ str[i].toUpperCase();
  }
}
return str1;
}
console.log(result("AaBbc"));
