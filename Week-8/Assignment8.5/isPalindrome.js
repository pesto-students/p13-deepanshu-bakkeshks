/*
Problem: Check the given number is palindrome or not.
Time & Space Complexity : O(Log(N)) & O(1)
*/

function isPalindrome(num) {
  if (num < 0) {
    return false;
  }
  let originalNum = num;
  let reversedNum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return originalNum === reversedNum;
}
console.log(isPalindrome(121));
console.log(isPalindrome(12345));
