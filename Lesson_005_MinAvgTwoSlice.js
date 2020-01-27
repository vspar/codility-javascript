const MinAvgTwoSlice = {

  solution: function(A) {
    let len = A.length;
    let orig_len = len;
    let res_p = 0;
    let avg = (A[0] + A[1]) / 2.0; // starting minimum average

    // turn array into prefix sums array, we can use this to speed up calculation of intervals
    for (let i=1; i<len; i++) {
      A[i] += A[i-1];
    }

    A.unshift(0); // add sum for prefix_0

    // only need to return the starting index of the slice with the
    // lowest average, so ignore slices larger than 3 - see https://github.com/daotranminh/playground/blob/master/src/codibility/MinAvgTwoSlice/proof.pdf
    // however, this solution also works without the line below
    len = 3.0;

    while (len >= 2) {
      let p = 0;

      while (len+p <= orig_len) {
        let q = p + len;
        let sum = A[q] - A[p];
        let new_avg = sum / len;

        if ((new_avg < avg) || ((new_avg == avg) && (p < res_p))) {
          avg = new_avg;
          res_p = p;
        }

        p++;
      }

      len--;
    }

    return res_p;
  }

}

result = MinAvgTwoSlice.solution([4, 7]);
console.log(`${result}, pass: ${result == 0}`);

result = MinAvgTwoSlice.solution([4, 2, 2, 5]);
console.log(`${result}, pass: ${result == 1}`);

result = MinAvgTwoSlice.solution([2, 2, 2, 5]);
console.log(`${result}, pass: ${result == 0}`);

result = MinAvgTwoSlice.solution([4, 2, 2, 2]);
console.log(`${result}, pass: ${result == 1}`);

result = MinAvgTwoSlice.solution([4, 3, 2, 2]);
console.log(`${result}, pass: ${result == 2}`);

result = MinAvgTwoSlice.solution([4, 3, 2, 2, 5]);
console.log(`${result}, pass: ${result == 2}`);

result = MinAvgTwoSlice.solution([4, 3, 2, 2, 1]);
console.log(`${result}, pass: ${result == 3}`);

result = MinAvgTwoSlice.solution([4, 3, 2, 2, 1, 9]);
console.log(`${result}, pass: ${result == 3}`);

result = MinAvgTwoSlice.solution([4, 2, 2, 5, 1, 5, 8]);
console.log(`${result}, pass: ${result == 1}`);

result = MinAvgTwoSlice.solution([1, 4, 2, 5, 3, 5, 1, 5, 8]);
console.log(`${result}, pass: ${result == 0}`);

result = MinAvgTwoSlice.solution([4, 2, 5, 3, 5, 1, 5, 8]);
console.log(`${result}, pass: ${result == 0}`);

result = MinAvgTwoSlice.solution([4, 2, 5, 2, 5, 1, 5, 1, 8]);
console.log(`${result}, pass: ${result == 5}`);

result = MinAvgTwoSlice.solution([8, 4, 2, 5, 3, 5, 1, 5]);
console.log(`${result}, pass: ${result == 1}`);

result = MinAvgTwoSlice.solution([5, 5, 5, 5, 5, 5, 5]);
console.log(`${result}, pass: ${result == 0}`);

result = MinAvgTwoSlice.solution([7, 6, 5, 4, 3, 2, 1]);
console.log(`${result}, pass: ${result == 5}`);

// TESTED AND PASSED ON Codility
