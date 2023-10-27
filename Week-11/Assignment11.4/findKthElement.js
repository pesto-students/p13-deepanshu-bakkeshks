function findKthElement(arr1, arr2, k) {
  let left = Math.min(arr1[0], arr2[0]);
  let right = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count1 = countElementsLessThanOrEqualTo(arr1, mid);
    let count2 = countElementsLessThanOrEqualTo(arr2, mid);
    let totalCount = count1 + count2;

    if (totalCount < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function countElementsLessThanOrEqualTo(arr, target) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      count = mid + 1;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return count;
}

// Given input arrays and k value
let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 9, 11];
let k = 5;

let result = findKthElement(arr1, arr2, k);
console.log(result);
