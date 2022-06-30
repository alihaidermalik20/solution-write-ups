'use strict';

/*

*/

function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((v, i) => v + a2[i]);
}

function addArrays2(array1, array2) {
  if(array1.length != array2.length) throw new Error();
  return array1.map((a,i) => array1[i] + array2[i]);
}

for (const solution of [addArrays, addArrays2]) {
  describe(`${solution.name}: addArrays`, () => {
    describe('adds up numbers from the same index in different arrays', () => {
      it('should take arrays [1, 2] and [3,4] and return -> [4,6]', () => {
        expect(solution([1,2], [3,4])).toEqual([4, 6]);
      });
    });
    describe('adds up two strings together', () => {
      it("should take arrays ['apple', 'banana'] and ['orange', 'mango'] and return -> ['appleorange', 'bananamango']", () => {
        expect(solution(['apple', 'banana'], ['orange', 'mango'])).toEqual(['appleorange', 'bananamango'])
      });
    });
    describe('throws an error if different lengths of arrays', () => {
      it('should take array [1, 2] and [2, 3, 4] and throw an error', () => {
        expect(() => solution([1, 2], [2, 3, 4])).toThrow();
      });
    });
  });
}
