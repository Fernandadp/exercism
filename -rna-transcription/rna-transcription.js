export const toRna = (input) => {

  const inputSingleLetters = input.split('');
  const inputLength = input.length;
  let i;
  let transcription = [];

  if (inputLength === 0){
    return "";
  }

  for (i = 0; i < inputLength; i++) {
    switch (inputSingleLetters[i]){
      case "A":
        transcription.push("U");
        break;
      case "T":
        transcription.push("A");
        break;
      case "C":
        transcription.push("G");
        break;
      case "G":
        transcription.push("C");
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }
  	return transcription.join('');
}