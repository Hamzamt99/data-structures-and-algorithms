'use strict';

// Require our linked list implementation
const Search = require('../index');

describe('test the function',()=>{
    it('success the search',()=>{
        let res = Search(5,[1,2,3,4,5,6,7,8,9,10])
        expect(res).toEqual(4)
    });
    it('faild the search',()=>{
        let res = Search(11,[1,2,3,4,5,6,7,8,9,10])
        expect(res).toEqual(-1)
    })
})