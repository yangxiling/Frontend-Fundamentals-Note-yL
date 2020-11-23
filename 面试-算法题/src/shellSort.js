//希尔排序  插入排序的一种更高效的改进版本
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 3) { //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  console.log(arr)
  return arr;
}
shellSort([2,6,9,8,0,7,6,5,4,4,4,11,89,70,56])
//时间复杂度O(nlogn)
//空间复杂度O(1)


