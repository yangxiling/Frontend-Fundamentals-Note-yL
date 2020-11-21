//选择排序
function selectionSort(arr) {
  for (let o = 0; o < arr.length-1; o++) {
    let min =o;
    for (let i = o + 1; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        min = i;
      }
    }
    if (arr[min] < arr[o]) {
      let temp = arr[o];
      arr[o] = arr[min];
      arr[min]= temp;
    }
  }
}
