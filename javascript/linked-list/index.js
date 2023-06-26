'use strict';


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //append to end of the list
  appendToEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // If the list is empty, set the new node as both the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, set the next pointer of the current tail to the new node
      // and update the tail to point to the new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  //append
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // isInclude
  isInclude(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
  // printAllList
  getAllValues() {
    const values = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
  //adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return;
    }

    previous.next = newNode;
    newNode.next = current;
    if (current === this.head) {
      this.head = newNode;
    }
    this.size++;
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    let current = this.head;

    while (current !== null && current.value !== value) {
      current = current.next;
    }


    if (current === null) {
      return;
    }

    newNode.next = current.next;
    current.next = newNode;

    if (current === this.tail) {
      this.tail = newNode;
    }

    this.size++;
  }
  kthFromEnd(k) {
    if (k <= 0 || this.head === null) {
      return null;
    }

    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null; 
      }
      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow.value;
  }


  // convert the node to this format node -> node -> null
  toString() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }

    result += 'NULL';
    return result;
  }

}
const ll = new LinkedList();
ll.append(100)
ll.append(200)
ll.append('a')
ll.getAllValues();
let test = ll.isInclude('a')
// console.log(test)
// console.log(ll.toString())


module.exports = LinkedList;