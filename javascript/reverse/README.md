##  README for this challenge is complete
### Summary : The list function takes an array as input and reverses it by adding each element at the beginning of a new array using the unshift operation. The function iterates through the input array, starting from the first element, and performs the unshift operation for each element. After iterating through all the elements, the function returns the reversed array.

### Description :The list function is designed to reverse an array by adding each element at the beginning of a new array. It takes an input array as a parameter and returns the reversed array.

### Approach : The approach taken by the list function to reverse an array is straightforward and involves iterating through the input array and adding each element at the beginning of a new array using the unshift operation. However, this approach has a time complexity of O(N^2), which is not the most efficient for larger arrays.

### Efficiency : Efficiency is a crucial consideration when designing algorithms and writing code. It refers to how well an algorithm performs in terms of time and space requirements.
### In the context of the list function and the approach to reverse an array, efficiency can be evaluated based on the time and space complexities.

### Time Complexity:
The time complexity of an algorithm indicates how the execution time grows with respect to the input size. It helps us understand how efficient the algorithm is in terms of time.

The initial approach used in the list function, which involves using the unshift operation in a loop, has a time complexity of O(N^2). This is because the unshift operation has a time complexity of O(N), and it is called for each element in the input array. As a result, the total number of operations increases quadratically as the input size grows.

The more efficient approach, utilizing the two-pointer technique, has a time complexity of O(N). It visits each element of the array once and performs a constant-time swapping operation. This linear time complexity ensures efficient performance, especially for larger arrays.

### Space Complexity:
The space complexity of an algorithm determines the amount of additional memory required by the algorithm to solve a problem.

The list function, as well as the two-pointer approach, both have a space complexity of O(N). This is because they require creating a new array to store the reversed elements. The space required increases linearly with the input size.

### Solution : 
#### Code :
 function list(arr){
    let array = [];
    for(let i =0 ; i < arr.length; i++){
    array.unshift(arr[i])
    }
    return array;
    }
module.exports = {
    list
}

### Picture of whiteboard 
[Picture of whiteboard](./assets/Whiteboard.jpg)

### Link to code 
[code](./reverseArray.js)

###  Unit tests written and passing

#### “reveres array” - Expected outcome

####  "same given array" Expected failure
