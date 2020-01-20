const MaxCounters = {

  solution: function(N, A) {
    let counters = Array(N).fill(0); // would be faster to use typed array (e.g. Uint32Array) but return value must be Array
    let prev_max = 0;
    let max = 0;
    let ci = 0;
    let len = A.length;

    for (let i=0; i<len; i++) {
      if (A[i] > N) {
        prev_max = max;
      } else {
        ci = A[i]-1;
        if (counters[ci] < prev_max) counters[ci] = prev_max;
        counters[ci]++;
        if (counters[ci] > max) max = counters[ci];
      }
    }

    for (let ci=0; ci<N; ci++) {
      if (counters[ci] < prev_max) counters[ci] = prev_max;
    }

    return counters;
  }

}

result = MaxCounters.solution(5, [3, 4, 4])
console.log(`${result}, pass: ${result.toString() == [0, 0, 1, 2, 0].toString()}`)

result = MaxCounters.solution(5, [3, 4, 4, 6])
console.log(`${result}, pass: ${result.toString() == [2, 2, 2, 2, 2].toString()}`)

result = MaxCounters.solution(5, [3, 4, 4, 6, 1, 4, 4])
console.log(`${result}, pass: ${result.toString() == [3, 2, 2, 4, 2].toString()}`)

result = MaxCounters.solution(3, [0, 0, 0, 0, 0])
console.log(`${result}, pass: ${result.toString() == [0, 0, 0].toString()}`)

result = MaxCounters.solution(3, [1, 1, 1, 1, 1])
console.log(`${result}, pass: ${result.toString() == [5, 0, 0].toString()}`)

// TESTED AND PASSED ON Codility
