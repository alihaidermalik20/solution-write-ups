# [challengeName](link-to-challenge)

<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

Remove any exclamation marks from a given string

## Syntax

> functionName(`type`, `type`, ...) -> `type`

### Parameters

**paramName**: `paramType`

<!--
  describe the parameter
-->

### Return Value: `type`

<!--
  describe the return value
-->

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

```

## Use Cases

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

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
