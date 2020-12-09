Function.prototype.myCall = function(context,...args){
  context = context || window;
  context.fn = this;
  let result = context.fn(...args)
  delete context.fn;
  return result;
}

//test
let obj={
  name:'jack'
}
function test(arg1,agr2){
  console.log(this.name);//jack
  console.log(arg1,agr2);//1,2
}
test.myCall(obj,1,2)
