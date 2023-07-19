# Challenge Title 
## find max in binary tree

## whiteboard:
![whiteBoard](./whiteboard.jpg)


## Approach & Efficiency:
i Used a method to find the max in the tree which is taking the root and keep looping right until there are no children that when the max is found and the time complixety for it is o(1) and space is o(n) and the big O is o(log n)
## Solution:
### Node Class:

'use strict'
  findmax(){
        let currentNode = this.Root
        while(currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.value
    }