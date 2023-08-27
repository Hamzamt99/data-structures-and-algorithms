const { moviesYear, moviesTittle, titleSort } = require('./sort');

const movies = [

];

describe('Movie Sorting', () => {
    it('should sort movies by year in descending order', () => {
        const sortedByYear = movies.slice().sort(moviesYear);
        expect(sortedByYear).toEqual([...movies].reverse());
    });

    it('should sort movies by title according to titleSort function', () => {
        const sortedByTitle = movies.slice().sort(moviesTittle);
        const expectedSortedByTitle = [
        ];
        expect(sortedByTitle).toEqual(expectedSortedByTitle);
    });

    it('should correctly remove articles from titles using titleSort', () => {
        const testCases = [
            { input: 'The Shawshank Redemption', expected: 'Shawshank Redemption' },
        ];

        testCases.forEach(({ input, expected }) => {
            const result = titleSort(input);
            expect(result).toBe(expected);
        });
    });
});
