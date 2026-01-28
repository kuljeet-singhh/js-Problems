//Create a function that will return in an array the first “p” prime numbers greater than “n”. Example: n = 10, p = 5

function primeNo(n,p){
const prime=[];

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let current = n+1;

while(prime.length<p){
  if(isPrime(current)){
    prime.push(current)
  }
  current++;
}

return prime;
}


let n = 10;
let p=5;
prime=primeNo(n,p);
console.log(` first ${p} prime numbers greater than ${n} : ${prime} `)

document.getElementById("demo").innerHTML = ` first ${p} prime numbers greater than ${n} : ${prime} ` ;
