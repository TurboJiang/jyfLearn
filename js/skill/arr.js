const arr = [99, 0, 33, 1, 2];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
        max = arr[i];
    }
}
// const min = Math.min(...arr);
// const max = Math.max(...arr);
console.log(min, max);

