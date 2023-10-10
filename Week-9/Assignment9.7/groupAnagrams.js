/*
Problem: Group Anagrams
Given an array of strings, group the anagrams together and return the groups as a 2D array. An anagram is a word formed by 
rearranging the letters of another word.
 */
function groupAnagrams(strs) {
  let anagrams = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedWord = strs[i].split("").sort().join("");

    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(strs[i]);
    } else {
      anagrams[sortedWord] = [strs[i]];
    }
  }

  let result = [];
  for (let key in anagrams) {
    result.push(anagrams[key]);
  }

  result.forEach((group) => group.sort());

  return result;
}

let input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input1)); // Output: [["ate","eat","tea"],["bat"],["nat","tan"]]

let input2 = ["abc", "bca", "xyz", "cba"];
console.log(groupAnagrams(input2)); // Output: [["abc","bca","cba"],["xyz"]]
