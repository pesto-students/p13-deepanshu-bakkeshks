function bucketSort(input) {
  // Separate even and odd numbers into two buckets
  let evenBucket = [];
  let oddBucket = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      evenBucket.push(input[i]);
    } else {
      oddBucket.push(input[i]);
    }
  }

  // Sort even and odd buckets
  evenBucket.sort((a, b) => a - b);
  oddBucket.sort((a, b) => a - b);

  // Concatenate the sorted even and odd buckets
  let sortedArray = evenBucket.concat(oddBucket);
  return sortedArray;
}

const input = [4, 2, 6, 9, 7, 5];
const sortedArray = bucketSort(input);
console.log("Sorted Array:", sortedArray.join(" "));
