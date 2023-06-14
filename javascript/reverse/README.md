
# Challenge Title
function reverseArray which takes an array as an argument. Without utilizing any of the built-in methods, return an array with elements in reversed order.

## Whiteboard Process
![whiteBoard](./assets/whiteboard.jpg)

## Approach & Efficiency
### The approach taken by the list function to reverse an array is straightforward and involves iterating through the input array and adding each element at the beginning of a new array using the unshift operation 
### Efficiency is a crucial consideration when designing algorithms and writing code. It refers to how well an algorithm performs in terms of time and space requirements.

### Time complexity : 
The loop iterates over the array arr in reverse order, from the last element to the first.
The loop executes arr.length times, which is proportional to the size of the input array.
Therefore, the time complexity is linear, O(n), where n represents the length of the input array.

### Space complexity : 
The function creates a new array called array to store the reversed elements.
The size of the array will be the same as the input array arr.
Thus, the space complexity is also linear, O(n), where n represents the length of the input array.
This is because the space required to store the reversed array grows proportionally with the input size.

## Solution
function list(arr){
let array = [];
for(let i = arr.length -1 ; i >= 0; i--){
array.push(arr[i])
}
return array;
}


