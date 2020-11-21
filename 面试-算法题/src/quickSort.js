//快排递归
function qSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return qSort(left).concat(pivot, qSort(right))
}
// qSort([5,3, 29, 10, 14,])

//快排迭代
function qSort(arr, left = 0, right = arr.length - 1) {
  var list = [
    [left, right]
  ]; // 模拟栈
  while (list.length > 0) {
    var now = list.pop()
    if (now[0] >= now[1]) continue;
    var i = now[0],
      j = now[1],
      flag = i;
    while (i < j) {
      while (arr[j] >= arr[flag] && j > flag) j--;
      if (i >= j) break;
      while (arr[i] <= arr[flag] && i < j) i++;
      var temp = arr[flag];
      arr[flag] = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      flag = i
    }
    list.push([now[0], flag - 1]);
    list.push([flag + 1, now[1]]);
  }
}