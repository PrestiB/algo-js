const arr = [8, 9, 23];
//const arr = [1, 1, 1, 1]
let min = arr[0],
  max = arr[0];
for (let elt of arr) {
  if (elt > max) {
    max = elt;
  } else if (elt < min) {
    min = elt;
  }
}
console.log("min:", min, "\nmax:", max);
