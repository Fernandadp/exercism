export class Triangle {

  constructor (side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  areEqual(sidex, sidey){
    return sidex === sidey;
  }

  removeLongestSide(sides, longestSide){
    let indexOfLongestSide = sides.indexOf(longestSide);
    sides.splice(indexOfLongestSide, 1);
  }

  kind(){
    if((this.side1 <= 0)|| (this.side2 <= 0) || (this.side3 <= 0)){
      throw new Error;
    }

    let sides = [this.side1, this.side2, this.side3];
    let longestSide = Math.max(...sides);
    this.removeLongestSide(sides, longestSide);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sidesReduced = sides.reduce(reducer);


    let sidesOneAndTwo = this.areEqual(this.side1, this.side2);
    let sidesTwoAndThree = this.areEqual(this.side2, this.side3);
    let sidesOneAndThree = this.areEqual(this.side1, this.side3);

    if(sidesReduced >= longestSide){
      if(sidesOneAndTwo && sidesTwoAndThree){
        return 'equilateral';
      }

      if(sidesOneAndTwo || sidesOneAndThree || sidesTwoAndThree){
        return 'isosceles';
      }

      if(!sidesOneAndTwo && !sidesTwoAndThree){
        return 'scalene';
      }

    } else {
      throw new Error;
    }
  }

}
