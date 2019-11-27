export class RotationalCipher {
}

RotationalCipher.rotate = function(input, key) {

  if(key === 0 || key === 26){
    return input;
  }

  const listOfIndex = [];

  const getIndex = function() {
    for(var i = 0; i < input.length; i++) {

      listOfIndex.push(input.charCodeAt(i));
    }
    return listOfIndex
  }();

  const newIndex = listOfIndex.map(index => {

    const indexOfCapitalA = 'A'.charCodeAt(0);
    const indexOfCapitalZ = 'Z'.charCodeAt(0);
    const indexLowerCaseA = 'a'.charCodeAt(0);
    const indexLowerCaseZ = 'z'.charCodeAt(0);

    const isUpperCase = index > indexOfCapitalA && index < indexOfCapitalZ;
    const isLowerCase = index > indexLowerCaseA && index < indexLowerCaseZ;
    const indexPlusKey = index + key;

    if(isUpperCase && indexPlusKey < indexOfCapitalZ) {
      return indexPlusKey
    } else if (isUpperCase && indexPlusKey >= indexOfCapitalZ){
      return indexPlusKey - 26
    } else if (isLowerCase && indexPlusKey < 123){
      return indexPlusKey
    } else if (isLowerCase && indexPlusKey >= 123){
      return indexPlusKey - 26
    } else {
      return index
    }

  });

  const newWord = newIndex.map(index => String.fromCharCode(index)).join('');

  return newWord;
}

