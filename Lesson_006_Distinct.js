const Distinct = {

  solution: function(A) {
    A = A.sort((a, b) => a-b);
    let current = null;
    let unique = 0;

    for (let i=0; i<A.length; i++) {
      if (A[i] !== current) {
        unique++;
        current = A[i];
      }
    }

    return unique;
  }

}

result = Distinct.solution([2, 1, 1, 2, 3, 1])
console.log(`${result}, pass: ${result == 3}`);

result = Distinct.solution([])
console.log(`${result}, pass: ${result == 0}`);

// TESTED AND PASSED ON Codility
