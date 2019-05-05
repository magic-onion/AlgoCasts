// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let string = n.toString();
  if (n === 0) {
    return 0;
  }
  if ( n < 0) {
    let posString = string.split("").slice(1).reverse();
    posString.unshift("-");
    let reversedInteger = parseInt(posString.join(""));
    return reversedInteger;
  }
  return parseInt(string.split("").reverse().join(""))
}

module.exports = reverseInt;
