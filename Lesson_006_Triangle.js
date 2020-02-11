const Triangle = {

// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].

  solution: function(A) {
    A = A.sort((a, b) => a - b).filter((v, i) => v > 0); // sorting works because the order of the sides doesn't matter + a triangle cannot have sides of length <= 0
    let len = A.length;

    for (let p=0; p<len-2; p++) {
      for (let q=p+1; q<len-1; q++) {
        for (let r=q+1; r<len; r++) {
          if (!(A[p] + A[q] > A[r])) break;
          if (!(A[q] + A[r] > A[p])) break;
          if (!(A[r] + A[p] > A[q])) break;
          return 1;
        }
      }
    }

    return 0;
  }

}

result = Triangle.solution([10, 2, 5, 1, 8, 20]);
console.log(`${result}, pass: ${result == 1}`);

result = Triangle.solution([1, 2, 5, 8, 10, 20]);
console.log(`${result}, pass: ${result == 1}`);

result = Triangle.solution([1, 2, 8, 10, 20]);
console.log(`${result}, pass: ${result == 0}`);

result = Triangle.solution([10, 50, 5, 1]);
console.log(`${result}, pass: ${result == 0}`);

result = Triangle.solution([10, 50]);
console.log(`${result}, pass: ${result == 0}`);

result = Triangle.solution([10]);
console.log(`${result}, pass: ${result == 0}`);

result = Triangle.solution([]);
console.log(`${result}, pass: ${result == 0}`);

// TESTED AND PASSED ON Codility
