const TapeEquilibrium = {

  solution: function(A) {
    let left = 0
    let right = A.reduce((a, b) => a+b)
    let diff = Math.abs(Math.max(...A) - Math.min(...A))

    for (i=1; i<A.length; i++) {
      left += A[i-1]
      right -= A[i-1]

      if (Math.abs(left - right) < diff) {
        diff = Math.abs(left - right)
      }
    }

    return diff
  }

}

result = TapeEquilibrium.solution([-1000, 1000])
console.log(`${result}, pass: ${result == 2000}`)

result = TapeEquilibrium.solution([0, 2000])
console.log(`${result}, pass: ${result == 2000}`)

result = TapeEquilibrium.solution([2000, 0])
console.log(`${result}, pass: ${result == 2000}`)

result = TapeEquilibrium.solution([500, 2000])
console.log(`${result}, pass: ${result == 1500}`)

result = TapeEquilibrium.solution([2500, 500])
console.log(`${result}, pass: ${result == 2000}`)

result = TapeEquilibrium.solution([3, 1])
console.log(`${result}, pass: ${result == 2}`)

result = TapeEquilibrium.solution([3, 1, 2, 4, 3])
console.log(`${result}, pass: ${result == 1}`)

result = TapeEquilibrium.solution([-3, 1, 2, 4, 2])
console.log(`${result}, pass: ${result == 2}`)

result = TapeEquilibrium.solution([-3, -1, -2, -4, -3])
console.log(`${result}, pass: ${result == 1}`)

// TESTED AND PASSED ON Codility
