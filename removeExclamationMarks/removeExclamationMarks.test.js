'use strict';

/*

*/

const removeExclamationMarks1 = s => s.replace(/!/g,"") ;
const removeExclamationMarks2 = s => s.split("!").join('');
function removeExclamationMarks3(s) {
    return s.replace(/[^\w\s]+/g, '');
  }

for (const solution of [removeExclamationMarks1, removeExclamationMarks2, removeExclamationMarks3]) {
  describe(`${solution.name}: ___`, () => {
    describe('_', () => {
      it('_', () => {
        expect(solution(_)).toEqual(_);
      });
    });
  });
}
