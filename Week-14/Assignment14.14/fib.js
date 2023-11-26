// Write a program to calculate the nth Fibonacci number using dynamic programming

function nthFibonacci(n) {
  let fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

let input = 7;
console.log("nth Fibonacci number:", nthFibonacci(input));
