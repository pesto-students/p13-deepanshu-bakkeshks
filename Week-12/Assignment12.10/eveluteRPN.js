// Reverse Polish Notation

function evaluateRPN(expression) {
  const stack = [];

  for (let token of expression) {
    // Push operands to stack
    if (!isOperator(token)) {
      stack.push(parseInt(token));
    } else {
      // Apply operator to top 2 operands
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  }

  return stack.pop();
}

function isOperator(token) {
  return ["+", "-", "*", "/"].includes(token);
}

let tokens = ["2", "3", "4", "*", "+"];
let result = evaluateRPN(tokens);

console.log(result);
