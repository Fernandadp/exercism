export const validate = number => {

  const numberToString = number.toString();
  const powerOf = numberToString.length;
  const arrayOfDigits = numberToString.split('')
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  const raisedNumbers = arrayOfDigits.map(digit => Math.pow(digit, powerOf));
  const isArmstrong = raisedNumbers.reduce(sum);
  return number === isArmstrong;

}