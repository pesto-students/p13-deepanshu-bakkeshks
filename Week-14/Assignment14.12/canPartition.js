// Write a program to determine if a given set of positive integers can be partitioned into two subsets with equal sum

function canPartition(nums) {
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) {
    return false;
  }

  let targetSum = totalSum / 2;
  let dp = new Array(targetSum + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let i = targetSum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[targetSum];
}

let set = [1, 5, 11, 5];
console.log(canPartition(set));
