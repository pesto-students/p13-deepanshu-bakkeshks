/*
Problem: reverse a number 
Time & Space complexity: O(Log(N)) & O(1)
*/

function reverseNumber(num) {
  let reversedNum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversedNum;
}
const numberToReverse = 12345;
const reversed = reverseNumber(numberToReverse);
console.log(`Reversed number: ${reversed}`);
