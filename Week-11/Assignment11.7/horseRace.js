function findMaxStrengthHorse(N, K, horses) {
  function race(groups) {
    if (groups.length === 1) {
      return groups[0].indexOf(Math.max(...groups[0]));
    }

    let mid = Math.floor(groups.length / 2);
    let firstGroup = groups.slice(0, mid);
    let secondGroup = groups.slice(mid);

    let winner1 = race(firstGroup);
    let winner2 = race(secondGroup);

    return horses[winner1] > horses[winner2] ? winner1 : winner2;
  }

  let groups = [];
  for (let i = 0; i < N; i++) {
    groups.push([i]);
  }

  while (K > 1) {
    let newGroups = [];
    for (let i = 0; i < groups.length; i += 2) {
      newGroups.push(groups[i].concat(groups[i + 1] || []));
    }
    groups = newGroups;
    K--;
  }

  return race(groups);
}

let N = 5;
let K = 3;
let horses = [4, 2, 7, 5, 1];

let result = findMaxStrengthHorse(N, K, horses);
console.log(result);
