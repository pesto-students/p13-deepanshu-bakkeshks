// Simplify Directory Path

function simplifyPath(path) {
  const directories = path.split("/");
  const stack = [];

  for (let directory of directories) {
    if (directory === "..") {
      // If the directory is a double dot '..', pop the top directory from the stack if it is not empty
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (directory !== "" && directory !== ".") {
      // Ignore empty directories and a single dot '.'
      stack.push(directory);
    }
  }

  // Construct the simplified path using the directories in the stack
  const simplifiedPath = "/" + stack.join("/");

  return simplifiedPath;
}

console.log("Output:", simplifyPath("/home/.././user//foo/../../bar"));
