# Hash Table Implementation

## Pull Request: https://github.com/Hamzamt99/data-structures-and-algorithms/pull/27

## Big O:
### Time Complexity:
- Hashing: O(k) time (length of key).
- Average-case Operations: O(1) time.
- Worst-case Linked List Operations: O(n) time.
- Keys Operation: O(n) time.

### Space Complexity:
- O(n), where n is the total number of key-value pairs stored in the hash table. This includes the space required for the hash table array and the linked lists used for collision resolution.

### Approach
The code defines a Hash class using separate chaining with linked lists for collision resolution. It provides methods to set, get, check existence, and retrieve keys from the hash table.

### Efficiency
The code efficiently handles collisions through separate chaining with linked lists, ensuring reliable performance for insertion and retrieval. However, actual performance may vary based on key distribution and list lengths.

### Code
```javascript
'use strict';

const LinkedList = require('./LinkedList');

class Hash {
    // ... (rest of the code)
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

module.exports = Hash;
