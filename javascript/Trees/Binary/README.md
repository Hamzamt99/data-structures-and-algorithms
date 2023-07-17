# Challenge Title 
## Trees

## whiteboard:
![whiteBoard](../assets/whiteboard.jpg)


## Approach & Efficiency:
i used binary tree algorithm approach and make a three methods pre order and post order and in order and extend a class from the binary tree to add node to the tree and search for specific node 
the time complexity for this approach is o(n) and the space complexity for this approach is o(n)
## Solution:
### Node Class:

'use strict'

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right
    }
}

module.exports = Node;

### BT class and BST calss:

'use strict'

const Node = require('./Node')

class BinaryTree {
    constructor() {
        this.Root = null;
    }

    // Pre-order: root >> left >> right
    preOrder() {
        let array = [];
        const traversal = (node) => {
            array.push(node.value)
            if (node.left !== null) traversal(node.left)
            if (node.right) traversal(node.right)
        }
        traversal(this.Root)
        return array
    }
    // // left >> root >> right
    inOrder() {
        let array = [];
        const traversal = (node) => {
            if (node.left !== null) traversal(node.left)
            array.push(node.value)
            if (node.right) traversal(node.right)
        }
        traversal(this.Root)
        return array
    }
    // // left >> right >> root
    postOrder() {
        let array = [];
        const traversal = (node) => {
            if (node.left) traversal(node.left)
            if (node.right) traversal(node.right)
            array.push(node.value)
        }
        traversal(this.Root)
        return array
    }

    isEmpty() {
        return this.Root === null
    }

}

class BinarySearchTree extends BinaryTree {
    Add(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) this.Root = newNode
        else this.AddNode(this.Root, newNode)
    }

    AddNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) root.left = newNode
            else this.AddNode(root.left, newNode)
        }
        if (newNode.value > root.value) {
            if (root.right === null) root.right = newNode
            else this.AddNode(root.right, newNode)
        }
    }

    Contain(root, value) {
        if (!root) return false
        else {
            if (root.value === value) return true
            else if (value < root.value) return this.Contain(root.left, value)
            else if (value > root.value) return this.Contain(root.right, value)
        }

        return false
    }
}


module.exports = BinarySearchTree