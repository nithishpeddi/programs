// Linear Search , Time Complexity O(n)
/* Linear search is not performant because in order to find the element in the worst 
case the computer will have to examine every single item in the array. Linear search can
 be implemented with the Javascript code below.*/

let searchArray = [2,4,1,55,12,21,18,56,88];

function linearSearch(arr,searchelement){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == searchelement){
            return 'elemenet found';
        }
    }
    return -1;
}

console.log(linearSearch(searchArray, 55));










