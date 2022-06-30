# From: [Remove exclamation marks](https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/javascript)

<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

Remove any exclamation marks from a given string

## Syntax

> removeExclamationMarks(`string`) -> `string`

### Parameters

**s**: `string`

<!--
  describe the parameter
-->

- any string of letters

### Return Value: `string`

<!--
  describe the return value
-->

- a string without any exclamation marks

## Test Cases

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->

### FromCodeWars

```js
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
  it('Fixed tests', () => {
    assert.strictEqual(removeExclamationMarks('Hello World!'), 'Hello World');
    assert.strictEqual(removeExclamationMarks('Hello World!!!'), 'Hello World');
    assert.strictEqual(removeExclamationMarks('Hi! Hello!'), 'Hi Hello');
  });

  it('Random tests', () => {
    function solution(s) {
      return s.replace(/!/g, '');
    }

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz';
    const getRandomString = () =>
      Array.from({ length: 10 })
        .map((x) => abc[~~(Math.random() * abc.length)])
        .join('');

    let rs =
      getRandomString() +
      '!' +
      getRandomString() +
      ' ' +
      getRandomString() +
      '!' +
      getRandomString();

    assert.strictEqual(
      removeExclamationMarks(rs),
      solution(rs),
      `Testing for s = ${JSON.stringify(rs)}`,
    );
  });
});
```

### From my testing

```js
/*
third function not only removes the ! marks but also any other characters such as ?
the regex removes everything that is not a letter or a number or a space multiple times
*/

const removeExclamationMarks1 = (s) => s.replace(/!/g, '');
const removeExclamationMarks2 = (s) => s.split('!').join('');
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
const userInput = 'John!';
const plainUserInput = removeExclamationMarks(userInput);
console.log(plainUserInput); // 'John'

const userNumber = '1234!5666.';
const plainUserNumber = removeExclamationMarks(userNumber);
console.log(plainUserNumber); // '12345666.'
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
