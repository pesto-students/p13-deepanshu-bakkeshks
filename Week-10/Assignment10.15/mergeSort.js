function mergeSortDates(dates) {
  if (dates.length <= 1) {
    return dates;
  }

  const mid = Math.floor(dates.length / 2);
  const left = dates.slice(0, mid);
  const right = dates.slice(mid);

  return merge(mergeSortDates(left), mergeSortDates(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const datesArray = ["2022-03-15", "2023-01-01", "2022-12-31", "2022-05-20"];

// Sorting the dates
const sortedDates = mergeSortDates(datesArray);
sortedDates.forEach((date) => {
  console.log(date);
});
