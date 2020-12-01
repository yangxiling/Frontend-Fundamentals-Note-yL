//插入排序
//插入排序对接近排好序的数据操作时，效率高，即可达到线性排序的效率
//但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位
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
//时间复杂度O(n²)
//空间复杂度O(1)
