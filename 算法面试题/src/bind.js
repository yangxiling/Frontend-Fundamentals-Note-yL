//bind方法返回一个函数
Function.prototype.myBind = function (context,...args){
  return (...newArgs)=>{
    context = context ||window;
    context.fn = this;
    let result;
    if(!args.length){
      result = context.fn(...newArgs);
    }else{
      result = context.fn([...args,...newArgs])
    }
    delete context.fn;
    return result;
    // return this.apply(context,[...args,...newArgs])
  }
}

//test
// test
const test = {
  name: "fy",
  showName: function (last) {
    console.log(this.name + " is " + last);
  },
};
test.showName("handsome"); // fy is handsome
test.showName.bind({ name: "Mr.fy" })("handsome");
test.showName.myBind({ name: "Mr.fy" })("handsome");