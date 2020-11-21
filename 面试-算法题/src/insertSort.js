//插入排序
function insertSort(arr) {
  for (let o = 1; o < arr.length; o++) {
    let i = o;
    let temp = arr[o]
    //保证前面排过的 都是有序的
    while (i > 0 && arr[i - 1] >= arr[o]) {
      arr[i] = arr[i - 1];
      --i;
    }
    arr[i] = temp;
  }
}