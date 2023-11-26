// Write a program to determine if a given string can be segmented into a space-separated sequence of words from a dictionary

function wordBreak(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

let input = "catsanddog";
let dict = ["cat", "cats", "and", "sand", "dog"];
console.log("Can be segmented:", wordBreak(input, dict));
