export default class Anagram {

  constructor(subject){
    this.subject = subject;
  }

  sortString(str){
    let strLowerCase = str.toLowerCase();
    let arr = strLowerCase.split('');
    let sorted = arr.sort();
    let joined = sorted.join('');
    return joined;
  }

  matches(listOfPosibleAnagrams){

    let matchedStrings = [];

    let sortedSubject = this.sortString(this.subject);

    listOfPosibleAnagrams.forEach(posibleAnagram => {

      if(this.subject.toLowerCase() !== posibleAnagram.toLowerCase()){
        if(sortedSubject === this.sortString(posibleAnagram)){
        matchedStrings.push(posibleAnagram);
        }
      }

    });

    return matchedStrings;
  }
}


/*   const sortedlistOfPosibleAnagrams = listOfPosibleAnagrams.map(listOfPosibleAnagramsElement => {
      let sortedString = sortString(listOfPosibleAnagramsElement);
      return sortedString;
      });

      const matchedStrings = sortedlistOfPosibleAnagrams.filter(sortedElement => {
        return sortedSubject === sortedElement;
      })*/


    /*createLetterObject(word){

    let wordLetters = word.split('');
    let countLettersObject = {};

    wordLetters.forEach(letter => {
      if(!countLettersObject.hasOwnProperty(letter)){
        countLettersObject[letter] = 1;
      } else {
        countLettersObject[letter] += 1;
      }
    });

    return {
            originalWord: word,
            letterSplitedObject: countLettersObject
            }
  }

  matchingFirstLetters(string1, string2){

    let arr1 = string1.toLowerCase().split('');
    let arr2 = string2.toLowerCase().split('');

    console.log(arr1);
    console.log(arr2);

      console.log(arr1.slice(0,1));
      console.log(arr2.slice(0,1));

    if(arr1.slice(0,1) === arr2.slice(0,1)){
      return true;
    }

  }

  matches(listOfPosibleAnagrams){

    let listOfAnagrams = [];
    let listOfAnagramsObjects = [];

    let subjectObject = this.createLetterObject(this.subject);
    let posibleAnagramObjects = listOfPosibleAnagrams.map(posibleAnagram => this.createLetterObject(posibleAnagram));

    listOfPosibleAnagrams.forEach(posibleAnagram => {

        posibleAnagramObjects.forEach(posibleAnagramObject => {

        let matchingWords = true;

        for(var posibleAnagramLetter in posibleAnagramObject.letterSplitedObject){

          if(subjectObject.letterSplitedObject[posibleAnagramLetter] !== posibleAnagramObject.letterSplitedObject[posibleAnagramLetter]){
            matchingWords = false;
          }
        }

          if(matchingWords){
            listOfAnagrams.push(posibleAnagramObject.originalWord);
          }
        });

    });

    return listOfAnagrams;
  }*/