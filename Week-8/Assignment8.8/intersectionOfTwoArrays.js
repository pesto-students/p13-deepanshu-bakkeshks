/*
Problem : Intersection of Two Arrays 
Take 2 arrays from as an input and return theintersection of the two arrays.
Intersection is the common elements in boththe arrays.
Time & Space Complexity: O(M*N) & O(1)
*/

function findIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
        break; // Once a common element is found, exit the inner loop
      }
    }
  }

  return intersection;
}

const input1 = [1, 2, 3, 4, 5];
const input2 = [4, 5, 6, 7, 8];
const result = findIntersection(input1, input2);
console.log(result); // Output: [4, 5]
