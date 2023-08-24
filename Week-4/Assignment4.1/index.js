class Calculator {
  // Method to add two numbers
  add(a, b) {
    return a + b;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    return a - b;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Method to divide two numbers
  divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
}

class ScientificCalculator extends Calculator {
  // Method to calculate the square of a number
  square(a) {
    return a * a;
  }

  // Method to calculate the cube of a number
  cube(a) {
    return a * a * a;
  }

  // Method to calculate the power of a number
  power(a, b) {
    return Math.pow(a, b);
  }
}

// Create an instance of the ScientificCalculator class
const sciCalc = new ScientificCalculator();

// Using the "call" method to invoke the "add" method of the Calculator class
const result1 = Calculator.prototype.add.call(sciCalc, 10, 5);
console.log("Using 'call' method for addition:", result1);

// Using the "apply" method to invoke the "subtract" method of the Calculator class
const result2 = Calculator.prototype.subtract.apply(sciCalc, [10, 5]);
console.log("Using 'apply' method for subtraction:", result2);

// Using the "bind" method to create the "multiplyByTwo" method
const multiplyByTwo = Calculator.prototype.multiply.bind(sciCalc, 2, 5);
console.log("Using 'bind' method for multiplyByTwo:", multiplyByTwo());

// Using the "bind" method to create the "powerOfThree" method
const powerOfThree = sciCalc.power.bind(sciCalc, 2, 3);
console.log("Using 'bind' method for powerOfThree:", powerOfThree());
