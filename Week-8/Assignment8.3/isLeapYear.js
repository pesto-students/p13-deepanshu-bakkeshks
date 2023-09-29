/*
Problem: is leapYear 
1] Check if the year is evenly divisible by 400
2] Check if the year is evenly divisible by 4 and not evenly divisible by 100.
3] Otherwise not a leap year
Time & Space Complexity: O(1)
*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2000));
