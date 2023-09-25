/*
Problem : display the product of lcm and hcf.
HCF: By Division Method 6 and 8 is 2.
LCM: (Number1 * Number2) / HCF.
LCM : ( 6 * 8 ) / 2 
Product of Hcf & Lcm is 2 * 24 = 48
Time & Space Complexity: O(Log(Min(a,b))) / O(1) 
*/

function calculateHCF(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calculateLCM(a, b) {
  return (a * b) / calculateHCF(a, b);
}

console.log(calculateHCF(6, 8) * calculateLCM(6, 8));
