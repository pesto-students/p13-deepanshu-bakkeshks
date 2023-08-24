function drawTriangle(triangleSize) {
  // Your solution goes here
  for (let i = 0; i < triangleSize; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}

drawTriangle(4);
