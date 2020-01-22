const GenomicRangeQuery = {

  solution: function(S, P, Q) {
    let dna = 'ACGT';
    let m = P.length;
    let result = [];

    for (let k=0; k<m; k++) {
      for (l=0; l<dna.length; l++) {
        let letter = dna.charAt(l);
        let i = S.indexOf(letter, P[k]);

        if (i >= P[k] && i <= Q[k]) {
          result.push(dna.indexOf(letter)+1);
          break;
        }
      }
    }

    return result;
  }

}

result = GenomicRangeQuery.solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);
console.log(`${result}, pass: ${result.toString() === [2, 4, 1].toString()}`);

result = GenomicRangeQuery.solution('A', [0], [0]);
console.log(`${result}, pass: ${result.toString() === [1].toString()}`);

// TESTED AND PASSED ON Codility
