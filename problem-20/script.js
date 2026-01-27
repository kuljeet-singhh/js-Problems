//Rotate an array to the left 1 position. Example array: [1, 2, 3, 4]
function rotateArr(arr, n) {
  // console.log(arr)
  let first = arr[0];
  for (let i = 0; i < n; i++) {
    // console.log(i);
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = first;
}

const array = [1, 2, 3, 4];
let n = array.length;
console.log(array);
rotateArr(array, n);
console.log(" Rotate an array to the left 1 position :  " + array);

document.getElementById("demo").innerHTML =
  " Rotate an array to the left 1 position :  " + array;
