function squareRoot(n) {
  let start = 0;
  let end = n;
  let ans = 0;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    let midSquared = mid * mid;

    if (midSquared === n) {
      ans = mid;
      break;
    } else if (midSquared < n) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans.toFixed(6);
}

// Read input from stdin
let input = 2;
let result = squareRoot(input);
console.log(result);
