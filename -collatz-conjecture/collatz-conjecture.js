export const steps = (number) => {

let times = 0;

  if(number === 1) {
   return times;
  }

  if (number <= 0) {
    throw "Only positive numbers are allowed"
  } 

  while(number != 1){
    if (number%2 == 0) {
      number /= 2;
      times += 1;
    } else {
      number = number* 3 + 1;
      times +=1;
    }
  }

  return times;
}
