function canCollectAtLeast(coins, target) {
  const n = coins.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
  dp[0][0] = coins[0][0] >= target;

  // Initialize the first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] || coins[0][j] >= target;
  }

  // Initialize the first column
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] || coins[i][0] >= target;
  }

  // Fill the dp table
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (coins[i][j] >= target) {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }

  return dp[n - 1][n - 1];
}

function findMaximumCoins(coins) {
  const n = coins.length;
  let start = 0;
  let end = Math.max(...coins.flat());

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (canCollectAtLeast(coins, mid)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
}

let coins = [
  [0, 2, 3, 4, 1],
  [2, 5, 1, 2, 6],
  [3, 6, 2, 5, 9],
  [8, 1, 9, 2, 5],
  [2, 3, 2, 1, 6],
];

let result = findMaximumCoins(coins);
console.log(result);
