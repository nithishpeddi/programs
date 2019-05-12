var arr1 = [1,3,4,2,1,1,1,2,4,2,5];
var maxonce = 1;
var maxtimes = 0;
var str ;

  
for(var i=0;i<arr1.length;i++){
  
  for(var j=1;j<arr1.length;j++){
    
    if(arr1[i] == arr1[j]){
      maxtimes++;
      if(maxonce<maxtimes){
        maxonce = maxtimes;
        str = arr1[i];
      }
    }
  } maxtimes = 0;
}

console.log(str,maxonce);


/// let result = arr1.filter(value=> Math.max(value.length));