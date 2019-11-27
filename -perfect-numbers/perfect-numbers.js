export const classify = (number) => {

	let factors = [];

	if(number < 1) {
		throw new Error('Classification is only possible for natural numbers.');
	}

  if(number === 1) {
    return 'deficient';
  }

	for(let i = 1; i < number; i++){
    if(number%i === 0){
      factors.push(i);
    }
	}

  let totalSum = factors.reduce((factor, sum) => factor + sum);

  if(totalSum === number){
    return 'perfect';
  }
  if(totalSum > number){
    return 'abundant';
  }
  if(totalSum < number){
    return 'deficient';
  }

}
