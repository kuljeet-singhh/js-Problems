//Print the first 100 prime numbers

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function prime(n) {
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
      arr[i] = i;
     
    }
  }
}
let arr = [];
let n = 100;

prime(n);
// console.log(isPrime(7))

document.getElementById("demo").innerHTML = " first 100 prime numbers = " + arr;
