function findPeakElement(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (
      (mid === 0 || nums[mid] > nums[mid - 1]) &&
      (mid === nums.length - 1 || nums[mid] > nums[mid + 1])
    ) {
      return mid;
    } else if (mid > 0 && nums[mid - 1] > nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1; // No peak element found
}

let nums = [1, 2, 1, 3, 5, 6, 4];

let result = findPeakElement(nums);
console.log(result);
