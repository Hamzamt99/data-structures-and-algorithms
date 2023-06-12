const {list} = require('./reverseArray')

describe('testing the function', () => {
    it('test the revers', () => {
        let rev = list([5, 12, 3, 8, 21, 7, 16, 2, 10, 14])
        expect(rev).toEqual([14, 10, 2, 16, 7, 21, 8, 3, 12, 5])
    })
})