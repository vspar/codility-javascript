const PermCheck = {

  solution: function(A) {
    let complete = Array.from(Array(A.length)).map((v,i) => i+1)

    if (complete.toString() == A.sort((a,b) => a-b).toString()) {
      return 1
    } else {
      return 0
    }
  }

}

result = PermCheck.solution([4, 1, 3, 2])
console.log(`${result}, pass: ${result == 1}`)

result = PermCheck.solution([4, 1, 3])
console.log(`${result}, pass: ${result == 0}`)

// TESTED AND PASSED ON Codility

