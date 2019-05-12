var arr = ["Blue", "Green", "Red", "Orange",
"Violet", "Indigo", "Yellow"];
var ord = ["th","st","nd","rd"];
var count = 1;
for(var i = 0; i < arr.length; i++){
if(count <= 3){
console.log(count + ord[count] + " choice is " + arr[i]);
count++;
}
else{
console.log(count + ord[0] + " choice is " + arr[i])
count++;
}
}