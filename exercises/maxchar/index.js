// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hashMap = {}
  let max = 0
  let char = ""
  for (let i = 0; i < str.split("").length; i++) {
    if (hashMap[str.split("")[i]]) {
      hashMap[str.split("")[i]] += 1
    }
    else {
      hashMap[str.split("")[i]] = 1
    }
  }
  for (let j in hashMap) {
    if (hashMap[j] > max) {
      max = hashMap[j]
      char = j
    }
  }
  return char

}

module.exports = maxChar;
