// Binary Search , Time Complexity O(longn)
/* Binary search is more efficient than linear search. The list of data must be sorted.
A binary search works by finding the middle element of a sorted array and comparing it to your target element.
 Based on what you find, you either use the left or right half of the array and update the start and ending 
 indexes until you either do or do not find the element.*/

// sorted array 
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(arr, searchelement) {
    let left = 0;
    let right = arr.length;
    while (left <= right) {
        let mid = left + Math.floor(arr.length - left) / 2;
        if (arr[mid] == searchelement) {
            return mid;
        } else if (arr[mid] < searchelement) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 'element not found';
}