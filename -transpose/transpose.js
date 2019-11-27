const splitString = anyString => anyString.split('');

const getLengthOfSplitString = singleString => splitString(singleString).length;

export const transpose = input => {

  let output = [];

  if(input.length === 0){
    return input;
  }

  const getLengths = input.map(getLengthOfSplitString);

  const maxLength = Math.max(...getLengths);

  const previousWords = input.map((word, index) => {

    for(var j = 0; j < index; j++){

      input[j] = input[j].padEnd(word.length);
    }
    return input[j];
  })

  for(var i = 0; i < maxLength; i++){
    const joinLetters = input.map(word => word[i]).join('');

    output.push(joinLetters);
  }

  return output;
}