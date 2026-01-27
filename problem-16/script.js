function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let n = 10;
const prime = isPrime(n);

console.log(prime);
document.getElementById("demo").innerHTML = prime
  ? n + " is a prime NO : " + prime
  : n + " is not a prime NO : " + prime;
// document.getElementById("demo").innerHTML = n + " is : " + prime;
