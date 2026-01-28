//Calculate the sum of digits of a positive integer number. Example number: 1234
let number =123;
let sum = 0;

while (number > 0) {

  let digit = number % 10; //get the last digit
  sum = sum + digit;      //add digit to the sum
  number /= 10;          //remove last digit
}
console.log("sum of digits : "+Math.floor(sum));
document.getElementById("demo").innerHTML = "sum of digits : "+Math.floor(sum);
