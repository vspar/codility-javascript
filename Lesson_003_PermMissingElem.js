const PermMissingElem = {

  solution: function(A) {
    A = A.sort(function(a, b){return a-b}) // comparison fn required otherwise numbers are compared as strings

    for (i=0; i<A.length; i++) {
      if (A[i] != i+1) {
        return i+1
      }
    }

    return A.length+1
  }

}

result = PermMissingElem.solution([6, 1, 3, 5, 2])
console.log(`${result}, pass: ${result == 4}`)

result = PermMissingElem.solution([6, 1, 3, 5, 2, 4])
console.log(`${result}, pass: ${result == 7}`)

result = PermMissingElem.solution([6, 1, 3, 5, 2, 4, 8, 9, 10])
console.log(`${result}, pass: ${result == 7}`)

let large = []

for (i=0; i<100000; i++) {
  large[i] = i+1
}

large.splice(99000, 1)
result = PermMissingElem.solution(large)
console.log(`${result}, pass: ${result == 99001}`)

// TESTED AND PASSED ON Codility
