'use strict';

console.log(`
1.
---

There is database of users and their hats at './database.json'.
Find the total sum of the top-3 most selling hats.
We don't care which hats are.
You can use lodash/underscore (recommended)

What is the complexity in O() notation of time and space?

IMPORTANT: Find a balance between performance and legibility (more important).

---
Example:
Imagine the following (taken from the real database):

Hat(7adbc650-2a5e-4e59-b88f-97377e0b7e34) sold 7.
Hat(872f5fc4-515f-416d-9ec6-3488da2bd74a) sold 6.
Hat(048d8fbf-7653-461f-a59c-68c73b8855e5) sold 7.
Hat(32266d28-5092-4a69-afb3-90fafd46e04a) sold 9.

-> Expected result: 7 + 7 + 9 => 23
`);

const _ = require('lodash'); // https://lodash.com/docs/4.17.4
const assert = require('assert');

const database = require('./database.json');

function getTopSellingHatsSum(hats) {
  const sortedArr = _.sortBy(hats);
  const [hat1, hat2, hat3] = sortedArr.slice(-3);
  return hat1 + hat2 + hat3; // Space complexity - O(1)
}

let soldHats = _.flatten(_.map(database, 'hats')); // Time complexity- O(n) Space complexity - O(k), where k = number of hats data
soldHats = _.values(_.countBy(soldHats, 'id')); // Time complexity - O(klog(k))

const total = getTopSellingHatsSum(soldHats) // Time complexity - O(nlog(n))

//Overall Time complexity  - O(n + nlog(n) + klog(k))
// Overall Space complexity - O(k)

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`);

console.log('Success!');
