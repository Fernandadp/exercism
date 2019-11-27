const validSet1 = '{}';
const validSet2 = '[]';
const validSet3 = '()';

let braces = [];
let brackets = [];
let parenthesis = [];

const bracesLength = braces.length;
const bracketsLength = brackets.length;
const parenthesisLength = parenthesis.length;

const validSinglePair = string => string === validSet1 || string === validSet2 || string === validSet3;

const validLength = length => length%2 === 0 || length === 0;

const bracketPush = string => {

  let splitString = string.split('');

  splitString.forEach(bracket => {

    if (bracket === '{' || bracket === '}') {
      braces.push(bracket)
    }

    if (bracket === '[' || bracket === ']') {
      brackets.push(bracket)
    }

    if (bracket === '(' || bracket === ')') {
      parenthesis.push(bracket)
    }

  });

  if (braces.join() === validSet1) {
    return true
  }

  if (brackets.join() === validSet2) {
    return true
  }

  if (parenthesis.join() === validSet3) {
    return true
  }

  console.log(brackets)
  console.log(braces)
  console.log(parenthesis)

  if (validLength(bracesLength) && validLength(bracketsLength) && validLength(parenthesisLength)) {
    return validSinglePair(string);
  }

  return false
}

export { bracketPush }
