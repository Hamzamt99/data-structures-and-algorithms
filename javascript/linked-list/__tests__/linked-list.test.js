'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('head to be empty',() =>{
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  }); 
   it(' append into the linked list',() =>{
    const ll = new LinkedList();
    ll.append(30)
    expect(ll.head.value).toEqual(30);
    ll.append(10)
    ll.append(20)
    expect(ll.head.next.value).toEqual(10);
  });
  it('return true when finding a value',() =>{
    const ll = new LinkedList();
    ll.append(20)
    ll.append(30)
    expect(ll.isInclude(30)).toBe(true);
  }); 
  it('return false when not finding a value',() =>{
    const ll = new LinkedList();
    ll.append(20)
    ll.append(30)
    expect(ll.isInclude(40)).toBe(false);
  }); 
  
  test('should return all values in the list', () => {
    const ll = new LinkedList();
    ll.append(10);
    ll.append(20);
    ll.append(30);
    const values = ll.getAllValues();
    expect(values).toEqual([10, 20, 30]);
  });
});
