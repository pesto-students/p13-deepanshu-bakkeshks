/*
Problem: Delete elements in anarray
Take an array input from the user and delete all the elements which are divisible by 2 and 3
Input:
1,2,3,4,5,6,7,8,9
Output:
[1, 5, 7]
Explanation:
1 , 5 and 7 are not divisible by 2 and 3.

Time & Space Complexity : O(N) & O(N) 
*/

function deleteDivisibleElements(arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 !== 0 && element % 3 !== 0) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultArray = deleteDivisibleElements(inputArray);
console.log(resultArray);
