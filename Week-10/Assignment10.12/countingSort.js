function countingSort(inputString) {
  // Convert comma-separated string to array of integers
  const inputArray = inputString.split(",").map((num) => parseInt(num));
  // Find the maximum element in the input array
  const max = Math.max(...inputArray);
  // Initialize counting array with zeros
  const countingArray = Array(max + 1).fill(0);
  // Count occurrences of each element in input array
  for (let num of inputArray) {
    countingArray[num]++;
  }

  // Modify counting array to store cumulative count
  for (let i = 1; i < countingArray.length; i++) {
    countingArray[i] += countingArray[i - 1];
  }

  // Create a sorted array
  const sortedArray = Array(inputArray.length);
  // Traverse input array from right to left and place elements in sorted array
  for (let i = inputArray.length - 1; i >= 0; i--) {
    const num = inputArray[i];
    sortedArray[countingArray[num] - 1] = num;
    countingArray[num]--;
  }

  return sortedArray;
}

const inputString1 = "9,5,3,7,1";
const sortedArray1 = countingSort(inputString1);
console.log(sortedArray1.join("\n"));
