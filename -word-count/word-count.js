export class Words {

  count(words){
    const onlyValidCharacters = words.replace(/\s+|\n/, ' ');
    const individualWords = onlyValidCharacters.toLowerCase().trim().split(' ');
    let countingObject = {};

    individualWords.forEach(word => {

      if(countingObject.hasOwnProperty(word)){
        return countingObject[word]++
      } else {
        return countingObject[word] = 1
      }

    });

    return countingObject;
  }
}