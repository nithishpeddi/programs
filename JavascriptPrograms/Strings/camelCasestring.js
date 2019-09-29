function camelCase(str){
    let arr = str.split(' ');
    let str2 = [];
  for(let i=0;i<arr.length;i++){
     str2.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  return str2.join(' ');
  }
  
  console.log(camelCase('heyhi am doiNg grEat how about you'))