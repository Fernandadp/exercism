export const compute = (dna1, dna2) => {

  let dna1Array = dna1.toUpperCase().split('');
  let dna2Array = dna2.toUpperCase().split('');

  let differences = 0;

  const detectDifferentCharacter = i => {
    if(dna1Array[i] !== dna2Array[i]){
      differences += 1;
    }
  }

  const checkEachCharacter = i => {
    for(i = 0; i < dna1Array.length; i++){
      detectDifferentCharacter(i);
    }
  }

  if(dna1Array.length === dna2Array.length && dna1Array !== ' '){
    checkEachCharacter();
    return differences
  }

  throw new Error ('left and right strands must be of equal length');
}
