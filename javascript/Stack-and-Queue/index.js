'use strict'

const Queue = require('./queue')
const Stack = require('./stack')

// const stack = new Stack();

// stack.push(1)
// stack.push(2)
// stack.peek()

// console.log(stack);
// console.log('====================================');
// console.log(stack.peek());

// stack.pop()

// console.log(stack);
// console.log('====================================');
// console.log(stack.peek());

// queue

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue);
queue.dequeue()
console.log(queue);

