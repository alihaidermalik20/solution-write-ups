'use strict';

/*
third function not only removes the ! marks but also any other characters such as ?
the regex removes everything that is not a letter or a number or a space multiple times
*/

const removeExclamationMarks1 = s => s.replace(/!/g,"") ;
const removeExclamationMarks2 = s => s.split("!").join('');
// function removeExclamationMarks3(s) {
//     return s.replace(/[^\w\s]+/g, '');
// }


for (const solution of [removeExclamationMarks1, removeExclamationMarks2]) {
  describe(`${solution.name}: remove exclamation marks from a string`, () => {
    describe('it should remove exclamation marks if there is one or many at any position', () => {
      it('should return a string after removing the one exclamation mark at the end', () => {
        expect(solution('string!')).toEqual('string');
      });
      it('should remove ! from the beginning', () => {
        expect(solution('!string')).toEqual('string');
      });
      it('should remove ! in the middle of a string', () => {
        expect(solution('str!ing')).toEqual('string');
      });
      it('should remove multiple ! at different places', () => {
        expect(solution('s!tr!in!g')).toEqual('string');
      });
    });
    describe('removes only the exclamation mark and nothing else from the string', () => {
      it('should remove only ! sign and not other characters or spaces', () => {
        expect(solution('st r? in!g')).toEqual('st r? ing');
      });
      it('should not remove any numbers', () => {
        expect(solution('12strin!g23')).toEqual('12string23');
      });
    });
  });
}
