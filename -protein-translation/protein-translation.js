export const translate = rna => {

  if(rna === undefined) {
    return [];
  }

  const splitRNA = rna.match(/.{1,3}/g);
  let protein = [];
  const codons = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }

  const translateCodons = splitRNA.forEach(codon => {
   if (codons.hasOwnProperty(codon)) {
      protein.push(codons[codon]);
    } else {
      throw new Error('Invalid codon');
    }
  });

  let indexOfStop = protein.indexOf('STOP');

  const sliceProtein = () => {
    if(indexOfStop !== -1) {
      return protein.slice(0, indexOfStop);
    } else {
      return protein;
    }
  }

  return sliceProtein();
}
