
const Hash = require('../Hash')

function repeatedWord(str) {
    const words = str.split(' ');
    const wordMap = new Hash();
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        const wordRep = lowerWord.replace(/[.,!?]/g, '');
        if (wordMap.has(wordRep)) {
            return wordRep;
        } else {
            wordMap.set(wordRep, str);
        }
    }

    return 'No repeated word';
}

const input = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
const repeated = repeatedWord(input);
console.log(repeated);