const MaxProductOfThree = {

  solution: function(A) {
    // negative numbers makes this tricky because of multiplication rules, e.g. (-5 * -5) = +25
    A = A.sort((a, b) => a-b);
    let len = A.length
    // compare products: top 3 numbers, and top number and bottom 2 numbers (which may be negative)
    let p_pos = A[len-1] * A[len-2] * A[len-3]
    let p_neg = A[len-1] * A[0] * A[1] // a pair of -ve numbers may make a larger product
    return p_pos > p_neg ? p_pos : p_neg
  }

}

result = MaxProductOfThree.solution([-3, 1, 2, -2, 5, 6])
console.log(`${result}, pass: ${result == 60}`);

result = MaxProductOfThree.solution([-5, 5, -5, 4])
console.log(`${result}, pass: ${result == 125}`);

result = MaxProductOfThree.solution([-4, -6, 3, 4, 5])
console.log(`${result}, pass: ${result == 120}`);

result = MaxProductOfThree.solution([4, 7, 3, 2, 1, -3, -5])
console.log(`${result}, pass: ${result == 105}`);

// TESTED AND PASSED ON Codility
