var arr = [];
function sentenceCase(str){
  
  var str2 = str.toLowerCase().split(' ');
  for(var i=0;i<str2.length;i++){
         arr.push(str2[i].charAt(0).toUpperCase() + str2[i].slice(1));
  }
  return arr.join(' ');
}

console.log(sentenceCase('PHP exercises. python exercises.'));
