// Egg Drop Problem: Write a program to solve the Egg Drop Problem and determine the minimum number of attempts needed to
// find the highest floor from which an egg can be dropped without breaking.
function eggDrop(eggs, floors) {
  let dp = new Array(eggs + 1).fill(0).map(() => new Array(floors + 1).fill(0));

  for (let i = 1; i <= eggs; i++) {
    dp[i][0] = 0;
    dp[i][1] = 1;
  }

  for (let j = 1; j <= floors; j++) {
    dp[1][j] = j;
  }

  for (let i = 2; i <= eggs; i++) {
    for (let j = 2; j <= floors; j++) {
      dp[i][j] = Infinity;

      for (let k = 1; k <= j; k++) {
        let attempts = 1 + Math.max(dp[i - 1][k - 1], dp[i][j - k]);

        dp[i][j] = Math.min(dp[i][j], attempts);
      }
    }
  }

  return dp[eggs][floors];
}

let numberOfEggs = 2;
let numberOfFloors = 10;
let result = eggDrop(numberOfEggs, numberOfFloors);
console.log("Minimum number of attempts needed:", result);
