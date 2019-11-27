export class HighScores {

  constructor(input){
    this.scores = input;
    this.latest = input[input.length - 1];
    this.personalBest = Math.max(...input);
    let copy = [...input];
    let sortedArray = copy.sort((a, b) => b - a);
    this.personalTopThree = sortedArray.slice(0,3);

  }

}