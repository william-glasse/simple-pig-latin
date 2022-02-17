const pigIt = require('../src/pigIt');

describe('Pig Latin', () => {
  test(`should add 'ay' on the end of single letter words`, () => {
    expect(pigIt('t')).toBe('tay');
  });
  test(`for two letter words, the characters are swapped and 'ay' is appended`, () => {
    expect(pigIt('at')).toBe('taay');
  });
  test(`for three letter words, the first character moves to the end and 'ay' is appended`, () => {
    expect(pigIt('and')).toBe('ndaay');
  });
  test(`for multiple words, each word moves the first character to end, and adds 'ay'`, () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
  });
  // test(`Punctuation is ignored`, () => {
  //   expect(pigIt('Hello world !')).toBe('elloHay orldway !');
  // });
});
