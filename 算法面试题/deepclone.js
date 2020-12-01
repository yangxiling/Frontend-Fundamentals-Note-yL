function deepClone(obj) {
  let copy = typeof obj === 'Array' ? [] : {};
  for (let key in obj) {
    //判断当前属性是不是对象实例上的属性   而不是原型上的属性
    if(obj.hasOwnProperty(key)){
      //如果当前属性是对象   就递归遍历
      copy[key] =  typeof obj[key] === 'object'?deepClone(obj[key]):obj[key];
    }
  }
  return copy;
}
//test
// console.log(deepClone({name: 'jack', birth: {year: '1997', month: '10'}}))