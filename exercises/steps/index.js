// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'



function steps(n) {
  let char = "#"
  for (let i = 1; i <=n; i++) {
    if (i === 1) {
      console.log(char)
    }
    else {
      char = char + "# \n" + "#"
    }
  }
  console.log(char)

}

module.exports = steps;
