function subStrAfterChars(str1,str2,str3){
    if(str3 === 'a'){
      return str1.substring(str1.indexOf(str2)+1);
    }
      if(str3 === 'b'){
      return str1.substring(str1.indexOf(str2)+1);
    }
  }
  
  console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
  console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));