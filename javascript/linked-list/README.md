 # Linked List Implementation
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Whiteboard Process
![whiteBoard](./assets/whiteBoard.jpg)

## Approach & Efficiency

### Approach:

- The code implements a singly linked list data structure using the classes Node and LinkedList.
- The Node class represents a single node in the linked list, containing a value and a reference to the next node.
- The LinkedList class represents the linked list, maintaining a reference to the head node and providing methods for various operations.

### Efficiency:

### Time complexity And Space complexity :
- The append operation in the linked list has a time complexity of O(1) as it adds a new node at the end of the list in constant time.
- The prepend operation has a time complexity of O(1) as it adds a new node at the beginning of the list in constant time.
- The search operation has a time complexity of O(n) in the worst case as it may need to traverse the entire list to find the desired value.
- The getAt operation has a time complexity of O(n) as it may require traversing the list until reaching the desired position.
- The isEmpty operation has a time complexity of O(1) as it checks whether the head property is null.
The space complexity of a singly linked list is O(n) as it requires memory to store each node, where n is the number of nodes in the list.

## Solution : 

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
