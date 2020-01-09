const CyclicRotation = {

  solution: function(A, K) {
    if (A.length > 0) {
      for (let i = 0; i < K; i++) {
        const popped = A.pop()
        A.unshift(popped)
      }
    }

    return A
  }

}

result = CyclicRotation.solution([], 1)
console.log(`${result}, pass: ${result.toString() == [].toString()}`)

result = CyclicRotation.solution([9], 1)
console.log(`${result}, pass: ${result.toString() == [9].toString()}`)

result = CyclicRotation.solution([1, 2, 3, 4, 5, 6, 7, 8], 3)
console.log(`${result}, pass: ${result.toString() == [6, 7, 8, 1, 2, 3, 4, 5].toString()}`)


// TESTED AND PASSED ON Codility
