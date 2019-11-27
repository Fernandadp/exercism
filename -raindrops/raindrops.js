export default class Raindrops {

  convert(number) { 

    let factors = [];
    let raindropSpeak = [];

    for (var i = 1; i <= number; i++){
      if(number % i === 0){
        factors.push(i);   
      }
    }

    if(factors.includes(3)){
      raindropSpeak.push("Pling");
    }

    if(factors.includes(5)){
      raindropSpeak.push("Plang");
    } 
    
    if(factors.includes(7)){
      raindropSpeak.push("Plong");
    }

    if (raindropSpeak.length > 0) {
      return raindropSpeak.join('')
    }

    return `${number}`;
  }

}
