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
const ll = new LinkedList();
ll.append(100)
ll.append(200)
ll.append('a')
ll.getAllValues();
let test = ll.isInclude('a')
// console.log(test)
// console.log(ll.toString())


module.exports = LinkedList;