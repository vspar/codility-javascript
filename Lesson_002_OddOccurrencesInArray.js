const OddOccurrencesInArray = {

  solution: function(A) {
    return A.reduce((t, n) => t^n) // takes advantage of the XOR binary operator to flush out the number bitwise
  }

}

result = OddOccurrencesInArray.solution([9])
console.log(`${result}, pass: ${result == 9}`)

result = OddOccurrencesInArray.solution([9, 3, 9, 3, 9, 7, 9])
console.log(`${result}, pass: ${result == 7}`)

result = OddOccurrencesInArray.solution([7, 3, 9, 3, 9, 9, 9])
console.log(`${result}, pass: ${result == 7}`)

result = OddOccurrencesInArray.solution([9, 3, 9, 3, 9, 9, 9])
console.log(`${result}, pass: ${result == 9}`)


function odd_man_out(a) {
  return a.reduce((t, n) => t^n)
}

// TESTED AND PASSED ON Codility
