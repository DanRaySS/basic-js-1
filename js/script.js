'use strict';

// const bigInt = 123123123123312983129849120481249012904120498n;

const sameBigInt = BigInt(123123123123312983129849120481249012904120498);

// console.log(typeof (bigInt));

let bigInt = 1n;

let number = 2;

console.log(bigInt + BigInt(number));
console.log(Number(bigInt) + number);