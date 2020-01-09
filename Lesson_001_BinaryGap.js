const BinaryGap = {

  solution: function(N) {
    let binary = N.toString(2)
    binary = binary.replace(/0+$/, '')
    longest = 0
    strings = binary.match(/0+/g)

    if (strings) {
      for (const match of strings) {
        if (match.length > longest) {
          longest = match.length
        }
      }
    }

    return longest
  }

}

result = BinaryGap.solution(657876)
console.log(`${result}, pass: ${result == 5}`)

result = BinaryGap.solution(8)
console.log(`${result}, pass: ${result == 0}`)

result = BinaryGap.solution(129)
console.log(`${result}, pass: ${result == 6}`)

result = BinaryGap.solution(2147483647)
console.log(`${result}, pass: ${result == 0}`)

result = BinaryGap.solution(2147483646)
console.log(`${result}, pass: ${result == 0}`)

result = BinaryGap.solution(462876534)
console.log(`${result}, pass: ${result == 2}`)

result = BinaryGap.solution(1041)
console.log(`${result}, pass: ${result == 5}`)

// TESTED AND PASSED ON Codility
