const PassingCars = {

  solution: function(A) {
    let result = 0;
    let len = A.length;
    let passing = A.reduce((a, b) => a+b);
    let passed = 0;

    for (i=0; i<len; i++) {
      if (A[i] === 0) {
        result += passing - passed;
      } else {
        passed += 1;
      }

      if (result > 1000000000) return -1;
    }

    return result;
  }

}

result = PassingCars.solution([0, 1, 0, 1, 1]);
console.log(`${result}, pass: ${result == 5}`);

result = PassingCars.solution([1, 1, 1, 1, 1]);
console.log(`${result}, pass: ${result == 0}`);

result = PassingCars.solution([0, 0, 0, 0, 0]);
console.log(`${result}, pass: ${result == 0}`);

result = PassingCars.solution([0, 1, 0, 1, 0, 0, 1, 1, 0, 0]);
console.log(`${result}, pass: ${result == 11}`);

// TESTED AND PASSED ON Codility
