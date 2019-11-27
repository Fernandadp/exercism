const listOfAllergiesObj = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
}

const listOfScores = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
}

class Allergies {

  constructor(score) {
    this.score = score
  }

  getSum(total, num) {
    return total + num;
  }

  list() {

    const getPartsOfScore = (score) => {

      const combinationsWithOneElement = [[score]];
      let combinationsWithTwoElements = [];
      let combinationsWithThreeElements = [];
      let combinationsWithFourElements = [];
      let combinationsWithMoreThanFourElements = []
      let sumOfLastTwoElements = score;
      let previousElements = [];
      let combinations = combinationsWithTwoElements;

      const pushSomeCombinations = (sum) => {

        for (var lastElement = 1; lastElement < sum; lastElement++) {

          const secondLastElement = sum - lastElement;
          const combinationOfLastTwoElements = [secondLastElement].concat([lastElement]);
          const combination = previousElements.concat(combinationOfLastTwoElements);

          combinations.push(combination);
        }
      }

      pushSomeCombinations(sumOfLastTwoElements);

      combinations = combinationsWithThreeElements;

      for (sumOfLastTwoElements = 2; sumOfLastTwoElements < score; sumOfLastTwoElements++) {

        const firstElement = score - sumOfLastTwoElements;
        previousElements = [firstElement];
        sumOfLastTwoElements = sumOfLastTwoElements;

        pushSomeCombinations(sumOfLastTwoElements);
      }

      for (var sumOfLastThreeElements = 3; sumOfLastThreeElements < score; sumOfLastThreeElements++) {

        combinations = combinationsWithFourElements;

        for (sumOfLastTwoElements = 2; sumOfLastTwoElements < sumOfLastThreeElements; sumOfLastTwoElements++) {

          previousElements = [score - sumOfLastThreeElements, sumOfLastThreeElements - sumOfLastTwoElements];

          pushSomeCombinations(sumOfLastTwoElements);

        }
      }

      if (score === 1) {

      }

      if (score === 2) {

      }

      if (score === 3) {

        // combinationsWithThreeElements = [[1, 1, 1]]

      }

      if (score === 4) {

        // combinationsWithThreeElements = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
        // combinationsWithFourElements = [[1, 1, 1, 1]];

      }

      if (score === 5) {

        // combinationsWithThreeElements = [[1, 1, 3], [1, 3, 1], [3, 1, 1], [1, 2, 2], [2, 1, 2], [2, 2, 1]];
        // combinationsWithFourElements = [[1, 1, 1, 2], [1, 1, 2, 1], [1, 2, 1, 1], [2, 1, 1, 1]];
        // combinationsWithMoreThanFourElements = [[1, 1, 1, 1, 1]]
      }

        const combinationsWithMoreThanThreeElements = combinationsWithFourElements.concat(combinationsWithMoreThanFourElements);

        const combinationsWithMoreThanTwoElements = combinationsWithThreeElements.concat(combinationsWithMoreThanThreeElements);

        const combinationsWithMoreThanOneElement = combinationsWithTwoElements.concat(combinationsWithMoreThanTwoElements);

        return combinationsWithOneElement.concat(combinationsWithMoreThanOneElement)

    }

    const compareNumbers = (a, b) => a-b;

    const isThereNoRepetition = (combination) => {

      const combinationUniqueElements = [... new Set(combination)];

      return combination.length === combinationUniqueElements.length
    }

    const isCombinationSorted = (combination) => {
      let isSorted = true;
      for(var i = 0; i < combination.length; i++) {

        if (combination.length >= i+1 && combination[i] > combination[i+1]) {
          isSorted = false;
        }
      }
      return isSorted;
    }

    const isKeyInListOfScores = (number) => listOfScores.hasOwnProperty(number);

    const isEveryNumberAKeyInListOfScores = (combination) => combination.every(isKeyInListOfScores);

    const isCombinationValid = (combination) => {
      return isThereNoRepetition(combination) &&
              isCombinationSorted(combination) &&
              isEveryNumberAKeyInListOfScores(combination)
    }

    const selectRightCombination = (listOfValidCombinations) => listOfValidCombinations[0];

    const getValidCombinations = (listOfCombinations) => listOfCombinations.filter(isCombinationValid)

    if (this.score === 0) {
      return []
    }

    const possibleCombinations = getPartsOfScore(this.score);
    const validCombinations = getValidCombinations(possibleCombinations);
    const rightCombination = selectRightCombination(validCombinations);
    const allergies = rightCombination.map(number => listOfScores[number]);

    return allergies;

  }

}

export { Allergies }
