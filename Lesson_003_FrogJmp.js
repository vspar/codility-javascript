const FrogJmp = {

  solution: function(X, Y, D) {
    return Math.ceil((Y-X)/D)
  }

}

result = FrogJmp.solution(10, 85, 30)
console.log(`${result}, pass: ${result == 3}`)

result = FrogJmp.solution(5, 105, 3)
console.log(`${result}, pass: ${result == 34}`)

result = FrogJmp.solution(10, 1000000000, 60)
console.log(`${result}, pass: ${result == 16666667}`)

// TESTED AND PASSED ON Codility
