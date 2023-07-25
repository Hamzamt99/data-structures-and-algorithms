'use strict'
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }
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
  isEmpty() {
    return this.root === null
  }
}

function fizzBuzzTree(karyTree) {
  if (!karyTree.root) {
    return new KaryTree(); // Return an empty tree if the input tree is empty
  }

  function fizzBuzzTraversal(node) {
    let value = node.value.toString(); // Convert the value to a string by default

    if (node.value % 3 === 0) {
      value = "Fizz";
    }

    if (node.value % 5 === 0) {
      value = value === "Fizz" ? "FizzBuzz" : "Buzz";
    }

    const newNode = new Node(value); // Create a new node with the updated value

    // Recursively process the children of the current node
    for (const child of node.children) {
      const newChild = fizzBuzzTraversal(child);
      newNode.children.push(newChild); // Add the updated child to the new node
    }

    return newNode;
  }

  const newTree = new KaryTree();
  newTree.root = fizzBuzzTraversal(karyTree.root); // Start the recursive traversal from the root
  return newTree;

}

module.exports = { KaryTree, fizzBuzzTree }