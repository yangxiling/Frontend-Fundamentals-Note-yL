//函数柯里化  每次只传一个值
function sum(...args) {
  let x = args.reduce((pre, next) => pre + next);
  return function (...args1) {
    if (args1.length) {
      let y = args1.reduce((pre, next) => {
      return pre + next
      });
      return sum(x + y);
    } else {
      return x;
    }
  }
}
curry(1, 2, 2, 5)(7)()