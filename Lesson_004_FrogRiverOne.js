const FrogRiverOne = {

  solution: function(X, A) {
    let completed = Array(X+1).fill(0)

    for (i=0; i<A.length; i++) {
      if (completed[A[i]] == 0) {
        completed[A[i]] = 1
        X--
      }

      if (X == 0) {
        return i
      }
    }

    return -1
  }

}

result = FrogRiverOne.solution(3, [1, 2, 3])
console.log(`${result}, pass: ${result == 2}`)

result = FrogRiverOne.solution(3, [1, 3, 1, 3, 2, 1, 3])
console.log(`${result}, pass: ${result == 4}`)

result = FrogRiverOne.solution(2, [1, 1, 1])
console.log(`${result}, pass: ${result == -1}`)

result = FrogRiverOne.solution(5, [1, 3, 1, 4, 2, 3, 5, 4, 4, 5])
console.log(`${result}, pass: ${result == 6}`)

result = FrogRiverOne.solution(3, [1, 3, 1, 2, 3])
console.log(`${result}, pass: ${result == 3}`)

result = FrogRiverOne.solution(3, [1, 3])
console.log(`${result}, pass: ${result == -1}`)

result = FrogRiverOne.solution(1, [1])
console.log(`${result}, pass: ${result == 0}`)

result = FrogRiverOne.solution(5, [1, 3, 1, 4, 5, 2, 3, 2, 4, 4, 3, 5, 1, 3, ])
console.log(`${result}, pass: ${result == 5}`)

result = FrogRiverOne.solution(2, [1])
console.log(`${result}, pass: ${result == -1}`)

// TESTED AND PASSED ON Codility

