const MissingInteger = {

  solution: function(A) {
    let reduced = Array.from(new Set(A.sort(function(a, b){return a-b}))).filter((v, i) => v > 0)

    for (i=0; i<reduced.length; i++) {
      if (reduced[i] != i+1) {
        return i+1
      }
    }

    return reduced.length+1
  }

}

result = MissingInteger.solution([1, 3, 6, 4, 1, 2])
console.log(`${result}, pass: ${result == 5}`)

result = MissingInteger.solution([1, 2, 3])
console.log(`${result}, pass: ${result == 4}`)

result = MissingInteger.solution([-1, -3])
console.log(`${result}, pass: ${result == 1}`)

result = MissingInteger.solution([-1, -3, 1, 100])
console.log(`${result}, pass: ${result == 2}`)

// TESTED AND PASSED ON Codility
