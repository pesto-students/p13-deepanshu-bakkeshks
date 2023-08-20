/*  JavaScript arrays */
function divideArray(numbers) {
  let evenNums = [];
  let oddNums = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNums.push(number);
    } else {
      oddNums.push(number);
    }
  }

  evenNums.sort();
  oddNums.sort();

  console.log("Even numbers:");
  console.log(evenNums);
  console.log("Odd numbers:");
  console.log(oddNums);
}

let numbers = [4, 2, 9, 1, 8];
divideArray(numbers);
