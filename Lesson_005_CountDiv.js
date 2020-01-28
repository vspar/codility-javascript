const CountDiv = {

  solution: function (A, B, K) {
    let first = A;

    for (i=A; i<=A+K; i++) {
      first = i;
      if (i%K == 0) break;
    }

    return Math.floor((B - first) / K) + 1;
  }

}

result = CountDiv.solution(5, 5, 2);
console.log(`${result}, pass: ${result == 0}`);

result = CountDiv.solution(6, 11, 2);
console.log(`${result}, pass: ${result == 3}`);

result = CountDiv.solution(6, 11, 3);
console.log(`${result}, pass: ${result == 2}`);

result = CountDiv.solution(6, 11, 4);
console.log(`${result}, pass: ${result == 1}`);

result = CountDiv.solution(4, 16, 4);
console.log(`${result}, pass: ${result == 4}`);

result = CountDiv.solution(3, 16, 4);
console.log(`${result}, pass: ${result == 4}`);

result = CountDiv.solution(0, 2000000000, 2);
console.log(`${result}, pass: ${result == 1000000001}`);

// TESTED AND PASSED ON Codility
