function counter() {
  let count = 0;

  function inner() {
    return ++count;
  }

  return inner;
}

const firstCounter = counter();
const secondCounter = counter();

const firstValues = [];
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

const secondValues = [];
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log("firstValues array:", firstValues);
console.log("secondValues array:", secondValues);
