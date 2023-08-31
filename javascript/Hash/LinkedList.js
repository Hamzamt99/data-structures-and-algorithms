'use strict'

const Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = { value: data, next: null };
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

module.exports = LinkedList