Function.prototype.myApply = function (context, args) {
  //context执行上下文环境  
  context = context || window;
  // 把当前函数当作一个方法添加到 context执行环境中
  context.fn = this;
  let result;
  //执行这个函数
  if (!args) {
    result = context.fn();
  } else {
    result = context.fn(...args);
  }
  // 执行完这个方法  在执行上下文环境中删除这个方法
  delete context.fn;
  return result;
}
//test
let obj = {
  name: 'jack'
}

function test(args) {
  console.log(this.name); //jack
  console.log(...args); //1,2,3
}
test.myApply(obj, [1, 2, 3]);