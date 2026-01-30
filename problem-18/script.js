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
current=2;
let arr = [];

while(arr.length<100){
  if(isPrime(current)){
  
  arr.push(current);
  console.log(current)
   
  }
 current++; 
 

}





// console.log(isPrime(7))

document.getElementById("demo").innerHTML = " first 100 prime numbers = " + arr;
