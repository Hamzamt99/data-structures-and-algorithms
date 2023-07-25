'use strict'

const BT = require('./BinaryTree')

const tree = new BT()

tree.Add(2)
tree.Add(3)
tree.Add(1)
tree.Add(5)
tree.Add(4)
tree.Add(8)
tree.Add(9)
tree.Add(17)


console.log(tree.fizzBuzzTree(tree));