function fiba(n) {
  if (n <= 1) return n;

  return fiba(n - 1) + fiba(n - 2);
}
let number = 20;
const fibonacci = fiba(number);
console.log("  nth Fibonacci number using recursion = " + fibonacci);

document.getElementById("demo").innerHTML =
  "  nth Fibonacci number using recursion = " +
  fibonacci +
  "<br/>" +
  "Number : " +
  number;
