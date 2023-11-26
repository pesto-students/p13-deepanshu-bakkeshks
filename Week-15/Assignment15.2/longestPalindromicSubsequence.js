function longestPalindromicSubsequence(s) {
  const n = s.length;
  let dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;

      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][n - 1];
}

let input1 = "babad";
console.log(
  "Length of Longest Palindromic Subsequence:",
  longestPalindromicSubsequence(input1)
);
