//归并排序
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const orderL = mergeSort(left);
  const orderR = mergeSort(right);
  let res = [];
  while (orderL.length || orderR.length) {
    if (orderL.length && orderR.length) {
      res.push(orderL[0] < orderR[0] ? orderL.shift() : orderR.shift())
    } else if (orderL.length) {
      res.push(orderL.shift());
    } else if (orderR.length) {
      res.push(orderR.shift());
    }
  }
  return res;
}