function count(str,str2){
    var arr = [];
    let count = 0;
    var newstr = str.split(' ');
   // console.log(newstr)
    for(var i=0;i<newstr.length;i++){
      if(newstr[i] === str2){
        arr.push(newstr[i]);
        count = count +1;
      }
    }
    return arr + '' + '   '+count;
  }
  
  console.log(count("The quick brown fox the jumps over the lazy dog", 'the'));