// //冒泡 
function bubbleSort(arr) {
  for (let o = arr.length - 1; o > 1; o--) {
    for (let i = 0; i < o; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap(arr[i], arr[i + 1])
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}
// bubbleSort([5, 3, 29, 10, 14, 37, 14])