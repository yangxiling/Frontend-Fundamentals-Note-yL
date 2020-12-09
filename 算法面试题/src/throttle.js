//每隔多久执行一次
function throttle(fn, wait) {
  let pre = new Date();
  return function () {
    let context = this;
    let args = arguments;
    let now = new Date();
    if (now - pre >= wait) {
      fn.call(context, args)
      pre = now;
    }
  }
}