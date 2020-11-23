//选择排序  每一轮选中谁（这一轮中包括自己最小的数）和谁换位置
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
//时间复杂度O(n²)
//空间复杂度O(1)
//不稳定