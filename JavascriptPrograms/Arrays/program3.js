var arr = [];
function str(s){
  var nestr = s.split(' ');
  for(var i=0;i<nestr.length;i++){
    arr.push(nestr[i].charAt(0).toLowerCase() + nestr[i].slice(1).toUpperCase());
  }
  return arr.join(' ');
}
console.log(str('The Quick Brown Fox'))