// Coin change: Write a program to find the minimum number of coins required to make the
// change for a given target amount using a set of coin denominations

function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
}

let coinDenominations = [1, 2, 5, 11];
let targetAmount = 10;
let result = coinChange(coinDenominations, targetAmount);
console.log("Minimum number of coins required:", result);
