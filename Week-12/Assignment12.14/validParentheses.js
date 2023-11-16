function isValidParentheses(input) {
  const stack = [];

  for (let char of input) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" && stack.pop() !== "(") {
      return false;
    } else if (char === "}" && stack.pop() !== "{") {
      return false;
    } else if (char === "]" && stack.pop() !== "[") {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("(){}[]"));
