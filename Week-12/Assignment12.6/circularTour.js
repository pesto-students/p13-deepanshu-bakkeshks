// Circular Tour of Petrol Pumps

function findStartingPoint(petrol, distance) {
  let start = 0;
  let totalPetrol = 0;
  let remainingPetrol = 0;

  for (let i = 0; i < petrol.length; i++) {
    totalPetrol += petrol[i] - distance[i];

    remainingPetrol += petrol[i] - distance[i];

    if (remainingPetrol < 0) {
      // If remaining petrol becomes negative, reset starting point
      start = i + 1;
      remainingPetrol = 0;
    }
  }

  // Check if the total remaining petrol is greater than or equal to 0
  if (totalPetrol >= 0) {
    return start;
  } else {
    return -1;
  }
}

let petrol1 = [4, 6, 5, 7];
let distance1 = [6, 3, 4, 5];
console.log("starting point:", findStartingPoint(petrol1, distance1));
