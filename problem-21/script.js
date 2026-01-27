//Rotate an array to the right 1 position Example array: [1, 2, 3, 4]
function rotateArr(arr, n) {
  console.log(arr);
  let last = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
}

const array = [1, 2, 3, 4];
let n = array.length;
rotateArr(array, n);
console.log("Rotate an array to the right 1 position : " + array);

document.getElementById("demo").innerHTML =
  " Rotate an array to the right 1 position :  " + array;
