const encode = string => {

  let splitString = string.split('');
  let rle = [];
  let counter = 0;
  let previousLetter = undefined;
  let firstLetter = splitString[0];
  let length = splitString.length;

  if (length <= 1) {
    return string;
  }

  for (var i = 1; i <= length; i++) {
    if (string === firstLetter.repeat(i)) {
      return i + firstLetter
    }
  }

  //check fromEntries method

  const countConsecutiveLetters = () => {

  }

  const list = [];

  for (var i = 0; i < length; i++) {

    if(previousLetter === undefined) {
      counter = 1;

    } else if(splitString[i] === previousLetter) {
      counter += 1;

    } else {
      list.push(counter + splitString[i])
      counter = 1
    }

    previousLetter = splitString[i]
  }


  // splitString.forEach(letter => {


  //   if(previousLetter === undefined) {
  //     counter = 1;

  //   } else if(letter === previousLetter) {
  //     counter += 1;

  //   } else {
  //     list.push(counter + letter)
  //     counter = 1
  //   }

  //   previousLetter = letter

  // })
  console.log(list)

  list.forEach(pair => {
    let getSplitPair = pair.split('');
    if (getSplitPair[0] === 1) {
      rle.push(getSplitPair[1])
    } else {
      rle.push(pair)
    }
  })

  return rle.join('');

}

const decode = rle => {

}


export { encode, decode }
