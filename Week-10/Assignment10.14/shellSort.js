// Function to convert date strings to timestamps
function convertToTimestamp(dateString) {
  return new Date(dateString).getTime();
}

// Shell Sort function to sort timestamps in ascending order
function shellSort(arr) {
  const n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

function sortDates(input) {
  const dates = input.split(",").map((date) => date.trim());
  const timestamps = dates.map((date) => convertToTimestamp(date));
  const sortedTimestamps = shellSort(timestamps);
  const sortedDates = sortedTimestamps.map((timestamp) =>
    new Date(timestamp).toLocaleString()
  );
  return sortedDates.join(", ");
}

const input1 =
  "2023-07-03 12:30:15, 2023-07-03 10:15:00, 2023-07-02 18:45:30, 2023-07-01 20:00:00";
const output1 = sortDates(input1);
console.log("Output: " + output1);
