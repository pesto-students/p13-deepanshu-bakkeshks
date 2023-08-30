function* generatorsArray(arr) {
  for (const str of arr) {
    yield Symbol(str);
  }
}

const inputArray = ["hello", "world", "test"];

const symbolIterator = generatorsArray(inputArray);

console.log(symbolIterator.next().value);
console.log(symbolIterator.next().value);
console.log(symbolIterator.next().value);
