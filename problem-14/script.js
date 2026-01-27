const arr = [];
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    arr[i] = a;
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
};
fibonacci(10);

document.getElementById("demo").innerHTML =
  " first 10 Fibonacci numbers = " + arr;
