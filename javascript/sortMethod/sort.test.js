const { moviesYear, moviesTittle, titleSort } = require('./sort');
const assert = require('assert');

describe('Comparator Functions', () => {
    const movies = [
        {
            title: 'The Inception',
            year: 2010,
            genres: ['Science Fiction', 'Action', 'Thriller'],
        },
        {
            title: 'The Shawshank Redemption',
            year: 1994,
            genres: ['Drama'],
        },
        {
            title: 'Jurassic Park',
            year: 1993,
            genres: ['Science Fiction', 'Adventure'],
        },
        {
            title: 'Pulp Fiction',
            year: 1994,
            genres: ['Crime', 'Drama'],
        },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
            genres: ['Fantasy', 'Adventure'],
        },
    ];

    describe('moviesYear', () => {
        it('should correctly sort movies by year in descending order', () => {
            const sortedMovies = movies.slice().sort(moviesYear);
            for (let i = 0; i < sortedMovies.length - 1; i++) {
                assert(sortedMovies[i].year >= sortedMovies[i + 1].year);
            }
        });
    });
    describe('moviesTittle', () => {
        it('should correctly sort movies by title', () => {
            const sortedMovies = movies.slice().sort(moviesTittle);
            for (let i = 0; i < sortedMovies.length - 1; i++) {
                assert(sortedMovies[i].title.localeCompare(sortedMovies[i + 1].title) <= 1);
            }
        });
    });



    describe('titleSort', () => {
        it('should remove common articles and return the cleaned title', () => {
            const testCases = [
                { input: 'The Shawshank Redemption', output: 'Shawshank Redemption' },
                { input: 'A Quiet Place', output: 'Quiet Place' },
                { input: 'An American in Paris', output: 'American in Paris' },
            ];

            testCases.forEach(({ input, output }) => {
                assert.strictEqual(titleSort(input), output);
            });
        });
    });
});
