const PENDING = Symbol();
const RESOLVED = Symbol();
const REJACTED = Symbol();
//因为要使用this  所以不能用箭头函数
const MyPromise = function (fn) {
  this.state = PENDING;
  this.value = '';

  const resolve = (value) => {
    this.state = RESOLVED;
    this.value = value;
  }

  const reject = (error) => {
    this.state = REJACTED;
    this.value = error;
  }

  this.then = (onResolve, onReject) => {
    if (this.state === RESOLVED) {
      onResolve(this.value);
    } else {
      onReject(this.value);
    }
  }

  try {
    fn(resolve,reject);//此处执行  函数resolve
  } catch (error) {
    reject(error)
  }
}
//test
let p = new MyPromise((RESOLVED,reject)=>{
  RESOLVED("hello")
});
p.then(x=>console.log(x))//hello