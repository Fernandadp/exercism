export class Series {

	constructor(string){
    let singleDigits = string.split('');
    this.digits = singleDigits.map(singleDigit => parseInt(singleDigit));
  }

  slices(n){

    const series = [];
    let i = 0;

  	if(n > this.digits.length){
  		throw new Error('Slice size is too big.')
  	}

    while(i + n <= this.digits.length){

      const toSlice = string => string.slice(i, i+n);

      let slicedstring = toSlice(this.digits);

      series.push(slicedstring);
      i++;
    }

    return series;
  }

}