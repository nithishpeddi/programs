


arr1 = [1,0,2,3,4];
arr2 = [3,5,6,7,8,13];
var res = [];
for (var i = 0; i < arr1.length; i++) {
for (var j = 0; j < arr2.length; j++) {
if(arr1.length < arr2.length){
arr1.push(0);
}
res = arr1[i] + arr2[j];
console.log(res);
}
}