/*
Problem: Maximum Points on a Line
Given a list of 2D points, write a function to find the maximum number of points that lie on the same line using hashing.
*/
function maxPointsOnLine(points) {
  if (points.length <= 2) {
    return points.length;
  }

  let maxPoints = 2;

  for (let i = 0; i < points.length; i++) {
    const slopes = {};
    let duplicate = 0;
    let localMax = 1;

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let dx = points[j][0] - points[i][0];
        let dy = points[j][1] - points[i][1];

        if (dx === 0 && dy === 0) {
          duplicate++;
          continue;
        }

        const gcdVal = gcd(dx, dy);
        dx /= gcdVal;
        dy /= gcdVal;

        const slope = `${dx}/${dy}`;

        if (slopes[slope]) {
          slopes[slope]++;
          localMax = Math.max(localMax, slopes[slope] + 1);
        } else {
          slopes[slope] = 1;
          localMax = Math.max(localMax, 2);
        }
      }
    }

    maxPoints = Math.max(maxPoints, localMax + duplicate);
  }

  return maxPoints;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

const points = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 5],
  [5, 6],
  [6, 7],
];
const result = maxPointsOnLine(points);
console.log(result); // Output: 3
