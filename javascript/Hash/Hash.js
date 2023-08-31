'use strict';

const LinkedList = require('./LinkedList')

class Hash {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        return key.split('').reduce((acc, current) => {
            return acc + current.charCodeAt(0);
        }, 0) * 599 % this.size;
    }

    set(key, value) {
        const hashedKey = this.hash(key);
        if (!this.map[hashedKey]) this.map[hashedKey] = new LinkedList();
        const list = this.map[hashedKey];
        for (let node = list.head; node !== null; node = node.next) {
            if (node.value.hasOwnProperty(key)) {
                node.value[key] = value;
                return;
            }
        }
        const entry = { [key]: value };
        list.add(entry);
    }

    get(key) {
        const getKey = this.hash(key);
        if (this.map[getKey]) {
            const list = this.map[getKey];
            for (let node = list.head; node !== null; node = node.next) {
                const data = node.value;
                return data[key]
            }
        } else {
            return false;
        }
    }

    has(key) {
        const hasHashed = this.hash(key);
        const list = this.map[hasHashed];
        if (list) {
            for (let node = list.head; node !== null; node = node.next) {
                const data = node.value;
                if (data.hasOwnProperty(key)) {
                    return true;
                }
            }
        }
        return false;
    }

    keys() {
        const allKeys = [];
        for (let list of this.map) {
            if (list) {
                for (let node = list.head; node !== null; node = node.next) {
                    const data = node.value;
                    const key = Object.keys(data)[0];
                    allKeys.push(key);
                }
            }
        }

        return allKeys;
    }

}

const hashed = new Hash(10);

hashed.set('hamza', 'student');
hashed.set('khaled', 'student');
hashed.set('sameer', 'student');
hashed.set('mohammed', 'student');
hashed.set('laith', 'student');
hashed.set('sith', 'student');

console.log(hashed.get('hamza'));
// console.log(hashed.keys());


module.exports = Hash