function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function prime1(num) {
  let p = 5;
  let n = 10;
  for (let i =0; i < num; i++) {
    if (isPrime(i)) {
      console.log(i);
      arr[i]=i
     
    }
  }
}
let arr= [];
let n = 100;
prime1(n);
document.getElementById("demo").innerHTML = " first 100 prime numbers = "+arr ;
