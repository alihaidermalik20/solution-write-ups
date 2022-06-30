'use strict';

/*

*/

function addUp(num) {
  return (num * (num + 1))/2;
};

function addUp2(num) {
  if (num === 1) return 1;
  return num + addUp2(num - 1);
};

for (const solution of [addUp, addUp2]) {
  describe(`${solution.name}: addUp`, () => {
    describe('adds up every number from 1 to the parameter', () => {
      it('should add up every number 1 to 4 and result in 10', () => {
        expect(solution(4)).toEqual(10);
      });
      it('1 -> 1', () => {
        expect(solution(1)).toEqual(1);
      });
      it('13 -> 91', () => {
        expect(solution(13)).toEqual(91)
      });
      it('600 -> 180300', () => {
        expect(solution(600)).toEqual(180300)
      });
      it('a string should throw an error', () => {
        expect(solution('string')).toEqual('pass an number not a string')
      });
    });
  });
}
