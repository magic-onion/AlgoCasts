// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//sanitize the data by ...
//remove punctuation and spaces
//hashmap the characters
//if same, return true, else false

function secondAnagrams(stringA, stringB) {
  function stringCleaner(string) {
    return
    string.replace(/[^\w]/g, "")
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  }
  stringCleaner(stringA) === stringCleaner(stringB)
}


function anagrams(stringA, stringB) {

  function charMap(string) {
    const charMap = {};

    for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap
  }

  let hashA = charMap(stringA);
  let hashB = charMap(stringB);

  if (Object.keys(hashA).length !== Object.keys(hashB).length) {
    return false
  }
  for (let char in hashA) {
    if (hashA[char] !== hashB[char]) {
      return false
    }

  }

  return true
}

module.exports = anagrams;
