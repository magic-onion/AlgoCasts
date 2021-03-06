// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0
  let preReg = str.replace("1", "").toLowerCase()
  let regEx = preReg.replace(/[aeiou]/g, "1")
  for (let char of regEx) {
    if (char === "1") {
      count ++
    }
  }
  return count
}

module.exports = vowels;
