# [All Star Code Challenge #20](https://www.codewars.com/kata/5865a75da5f19147370000c7/solutions)


  Takes two arrays as arguments and adds up every index of one array with the same index of the other array to return a third array


## Syntax

> addArrays(`array`, `array`, ...) -> `array`

### Parameters

**arr1**: `array`

- an array of numbers or letters of a certain length

**arr2**: `array`

- another array of the same type, numbers or letters, with the same length

<!--
  describe the parameter
-->

### Return Value: `array`

<!--
  describe the return value
-->

- a new array that has as first index, first index of arr1 added with first index of arr2, second index of arr1 and second index of arr2 added up as second index and so on ...

## Test Cases

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->

```js

let random = function (num) {
  //returns a random integer from 0 - num
  return Math.floor(Math.random() * num);
};

let randomArray = function (array) {
  //returns a random number of random elements from the input array (repeats allowed)
  let output = [];
  let counter = 9;
  while (counter > 0) {
    output.push(array[random(array.length)]);
    counter--;
  }
  return output;
};

function mySol(array1, array2) {
  if (array1.length != array2.length) throw 'not same length';
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i] + array2[i]);
  }
  return array3;
}

describe('testing addArrays()', function () {
  it('should properly handle example test case', function () {
    Test.assertSimilar(addArrays([1, 2], [4, 5]), [5, 7]);
    Test.assertSimilar(
      addArrays(['a'], ['b']),
      ['ab'],
      'Should work with strings as well'
    );
  });

  it('should raise error with improper array length input', function () {
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1, 2, 3], [4, 5]);
      }
    );
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1], [4, 5]);
      }
    );
  });

  it('should accept empty arrays', function () {
    Test.assertSimilar(
      addArrays([], []),
      [],
      'Should allow for empty arrays as input'
    );
    Test.expectNoError(function () {
      addArrays([], []);
    });
  });

  it('should properly handle random arrays of integers', function () {
    let input1, input2, answer, output;
    let counter = 10;
    while (counter > 0) {
      input1 = randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      input2 = randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      answer = mySol(input1, input2);
      output = addArrays(input1, input2);
      Test.assertSimilar(answer, output);
      counter--;
    }
  });

  it('should properly handle random arrays of strings', function () {
    let letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    let input1, input2, answer, output;
    let counter = 10;
    while (counter > 0) {
      let input1 = randomArray(letters);
      let input2 = randomArray(letters);
      let answer = mySol(input1, input2);
      let output = addArrays(input1, input2);
      Test.assertSimilar(answer, output);
      counter--;
    }
  });
});
```

```js
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
```

## Use Cases

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

```js
const user1 = ['John', 'Wayne'];
const address1 = ['California', 'Nebraska'];
const suggestedUsername = addArrays(user1, address1);
console.log(suggestedUsername); // ['JohnCalifornia', 'WayneNebraska']
```

---

## Retrospective

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

### Continue Doing

### Start Doing

### Stop Doing
