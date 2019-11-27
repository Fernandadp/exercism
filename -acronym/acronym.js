const invalidCharacters = /[\_\-]/;

const onlyLettersPhrase = phrase => phrase.replace(invalidCharacters, ' ');

const splitPhrase = phrase => onlyLettersPhrase(phrase).split(' ');

const firstLetter = word => word.toUpperCase()[0];

export const parse = phrase => splitPhrase(phrase).map(firstLetter).join('');
