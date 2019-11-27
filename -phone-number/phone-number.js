export default class PhoneNumber {

  constructor(phoneNumber){
    this.phoneNumber = phoneNumber;
  }

  number(){

    let onlyNumbers = [];

    const numbersArray = this.phoneNumber.split('');

      numbersArray.forEach(singleNumber => {

        if(/\d/.test(singleNumber)){
          onlyNumbers.push(singleNumber);
        }
      });


      if(onlyNumbers.length === 11 && onlyNumbers.shift() !== '1'){
        return null
      }

      if(onlyNumbers.length === 10){

        if(onlyNumbers[0] === '1' || onlyNumbers[0] === '0' || onlyNumbers[3] === '1' || onlyNumbers[3] === '0'){
          return null;

        } else {
          return onlyNumbers.join('');

        }
      }

        return null;
  }
}