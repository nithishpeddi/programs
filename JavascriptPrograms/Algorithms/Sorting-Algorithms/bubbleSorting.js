/* The next algorithm in the Javascript Algorithms series is bubble sort.
 Like insertion sort, bubble sort is a comparison algorithm and runs in O(n²) */

let array = [5, 3, 1, 4, 6];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));

