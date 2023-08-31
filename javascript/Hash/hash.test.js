const Hash = require('./Hash');

describe('Hash Table Tests', () => {
    let hashed;

    beforeEach(() => {
        hashed = new Hash(10);
    });

    it('should set a key/value in the hashtable', () => {
        hashed.set('hamza', 'student');
        expect(hashed.get('hamza')).toBe('student');
    });

    it('should retrieve a value based on a key', () => {
        hashed.set('khaled', 'student');
        expect(hashed.get('khaled')).toBe('student');
    });

    it('should return null for a key that does not exist', () => {
        expect(hashed.get('sss')).toBe(false);
    });

    it('should return a list of all unique keys in the hashtable', () => {
        hashed.set('hamza', 'student');
        hashed.set('khaled', 'TA');
        hashed.set('mohammed', 'student');

        const keys = hashed.keys();
        expect(keys).toEqual(expect.arrayContaining(['hamza', 'khaled', 'mohammed']));
    });

    it('should successfully handle collisions within the hashtable', () => {
        const smallHashed = new Hash(2);
        smallHashed.set('a', 's');
        smallHashed.set('b', 's');

        expect(smallHashed.get('a')).toBe('s');
        expect(smallHashed.get('b')).toBe('s');
    });

    it('should retrieve a value from a bucket with a collision', () => {
        hashed.set('hamza', 'TA');
        hashed.set('khaled', 'student');
        expect(hashed.get('hamza')).toBe('TA');
        expect(hashed.get('khaled')).toBe('student');
    });

    it('should hash a key to an in-range value', () => {
        const key = 'key';
        const hashedIndex = hashed.hash(key);

        expect(hashedIndex).toBeGreaterThanOrEqual(0);
        expect(hashedIndex).toBeLessThan(hashed.size);
    });
});
