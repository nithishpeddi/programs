
// find the string how many ovels 
let str = 'hello a i nt world';
let count = 0;
let arr = [];
let vowels = ['a','e','i','o','u'];
for(let char of str.toLowerCase()){
if(vowels.includes(char) && arr.indexOf(char) == -1){
arr.push(char)
count++;
}

}
console.log(arr, count)
