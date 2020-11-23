function shellSort(arr) {
  let gap = 1;
  const len = arr.length;
  //动态定义间隔
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    //插入排序
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i - gap;
      while (j >= 0 && arr[j] > arr[i]) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j+gap] = temp;
    }
  }
  console.log(arr)
  return arr;
}
shellSort([2,6,9,8,0,7,6,5,4,4,4])
