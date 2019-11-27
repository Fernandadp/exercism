import { Allergies } from './allergies';

describe('Allergies', () => {
  xtest('no allergies at all', () => {
    const allergies = new Allergies(0);
    expect(allergies.list()).toEqual([]);
  });

  test('allergies to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.list()).toEqual(['eggs']);
  });

  test('allergies to peanuts', () => {
    const allergies = new Allergies(2);
    expect(allergies.list()).toEqual(['peanuts']);
  });

  test('allergies to shellfish', () => {
    const allergies = new Allergies(4);
    expect(allergies.list()).toEqual(['shellfish']);
  });

  xtest('allergies to strawberries', () => {
    const allergies = new Allergies(8);
    expect(allergies.list()).toEqual(['strawberries']);
  });

  test('allergies to eggs and peanuts', () => {
    const allergies = new Allergies(3);
    expect(allergies.list()).toEqual(['eggs', 'peanuts']);
  });

  test('allergies to more than eggs but not peanuts', () => {
    const allergies = new Allergies(5);
    expect(allergies.list()).toEqual(['eggs', 'shellfish']);
  });

  xtest('allergies to more than eggs but not eggs', () => {
    const allergies = new Allergies(6);
    expect(allergies.list()).toEqual(['peanuts', 'shellfish']);
  });

  xtest('allergies to more than eggs ', () => {
    const allergies = new Allergies(7);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish']);
  });

  xtest('allergies to more than eggs ', () => {
    const allergies = new Allergies(9);
    expect(allergies.list()).toEqual(['eggs', 'strawberries']);
  });

  xtest('allergies to more than peanuts ', () => {
    const allergies = new Allergies(10);
    expect(allergies.list()).toEqual(['peanuts', 'strawberries']);
  });

  xtest('allergies to more than eggs ', () => {
    const allergies = new Allergies(11);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'strawberries']);
  });

  xtest('allergies to two allergies', () => {
    const allergies = new Allergies(12);
    expect(allergies.list()).toEqual(['shellfish', 'strawberries']);
  });

  xtest('allergies to more than eggs', () => {
    const allergies = new Allergies(13);
    expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries']);
  });

  xtest('allergies to more than peanuts', () => {
    const allergies = new Allergies(14);
    expect(allergies.list()).toEqual(['peanuts', 'shellfish', 'strawberries']);
  });

  xtest('allergies to more than eggs', () => {
    const allergies = new Allergies(15);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish', 'strawberries']);
  });

  xtest('allergies to tomatoes', () => {
    const allergies = new Allergies(16);
    expect(allergies.list()).toEqual(['tomatoes']);
  });

  xtest('allergies to eggs and tomatoes', () => {
    const allergies = new Allergies(17);
    expect(allergies.list()).toEqual(['eggs', 'tomatoes']);
  });

  xtest('allergies to peanuts and tomatoes', () => {
    const allergies = new Allergies(18);
    expect(allergies.list()).toEqual(['peanuts', 'tomatoes']);
  });

  xtest('allergies to eggs, peanuts and tomatoes', () => {
    const allergies = new Allergies(19);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'tomatoes']);
  });

  xtest('allergies to more than eggs but not eggs', () => {
    const allergies = new Allergies(48);
    expect(allergies.list()).toEqual(['tomatoes', 'chocolate']);
  });

  xtest('allergic to lots of stuff', () => {
    const allergies = new Allergies(248);
    expect(allergies.list()).toEqual(['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  xtest('allergic to everything', () => {
    const allergies = new Allergies(255);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  xtest('no allergic means not allergic', () => {
    const allergies = new Allergies(0);
    expect(allergies.allergicTo('peanuts')).toEqual(false);
    expect(allergies.allergicTo('cats')).toEqual(false);
    expect(allergies.allergicTo('strawberries')).toEqual(false);
  });

  xtest('allergic to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  xtest('allergic to eggs and other things', () => {
    const allergies = new Allergies(5);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  xtest('ignore non allergen score parts', () => {
    const allergies = new Allergies(509);
    expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });
});
