//节流和防抖本质上不一样   
//防抖是将多次执行变为一次
//节流是每隔一段时间执行一次
function debounce(fn, wait) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(()=>fn.call(context, args), wait)
  }
}