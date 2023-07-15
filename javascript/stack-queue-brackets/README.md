 # Stack and a Queue 
Stack: A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, where elements are added and removed from the top.

Queue: A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front.

## Whiteboard Process
![whiteBoard](./whiteboard(1).jpg)

## Approach & Efficiency

### Approach:

- Initialize an empty stack.
- Iterate through each character in the string.
- If the character is an opening bracket, push it onto the stack.
- If the character is a closing bracket, check if it matches the top of the stack. If it does, pop the top of the stack. If it doesn't match or the stack is empty, return false.


### Efficiency:
- Time complexity measures how the runtime of an algorithm increases with the input size.
- Big O notation is commonly used to express the upper bound of an algorithm's time complexity.
- Efficient algorithms aim to have lower time complexity, such as O(1) or O(log n), indicating faster execution.
- It's important to choose algorithms and data structures wisely to optimize efficiency for specific problem requirements.

### Time complexity:
Time complexity quantifies the amount of time an algorithm takes to run as the input size increases.
It is expressed using Big O notation, which provides an upper bound on the growth rate of the algorithm's runtime.
Common time complexities include O(1) (constant time), O(log n) (logarithmic time), O(n) (linear time), O(n^2) (quadratic time), and more.
Understanding time complexity helps in analyzing and comparing the efficiency of different algorithms and making informed decisions when solving problems.

### Space Complexity:
Space complexity measures the additional memory an algorithm needs as the input size increases.
It is expressed using Big O notation, representing the upper bound of the memory usage by the algorithm.
Common space complexities include O(1) (constant space), O(n) (linear space), O(n^2) (quadratic space), and more.
Analyzing space complexity helps in evaluating the efficiency and scalability of algorithms in terms of memory usage.

## Solution : 

function validateBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    const isMatchingPair = (opening, closing) => {
        return (
            (opening === '(' && closing === ')') ||
            (opening === '[' && closing === ']') ||
            (opening === '{' && closing === '}')
        );
    };

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (openingBrackets.includes(currentChar)) {
            stack.push(currentChar);
        } else if (closingBrackets.includes(currentChar)) {
            if (stack.length === 0) {
                return false;
            }

            const top = stack.pop();
            if (!isMatchingPair(top, currentChar)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
