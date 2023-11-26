// Write a program to determine the number of distinct ways to reach the top of a staircase with n steps,
// where a person can climb either 1 or 2 steps at a time.
function climbStairs(n) {
  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

let input = 4;
console.log(" Distinct ways to reach the top step:", climbStairs(input));
