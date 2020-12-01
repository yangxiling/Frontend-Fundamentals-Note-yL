function isPromise(obj) {
  return !!obj && (typeof obj === 'undefined' || typeof obj === 'object') &&
    typeof obj.then === 'function';
}

function MyPromiseAll(arr) { //如果数组中全是resolve，返回一个n个promise数组；如果有reject，返回第一个reject
  let res = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; ++i) {
      if (isPromise(arr[i])) { //如果是promise实例，需要通过then拿到它的数据
        arr[i].then(
          data => {
            res[i] = data;
            if (res.length === arr.length) {
              resolve(res)
            }
          }
        ).catch(
          error => reject(error)
        )


      } else {
        res[i] = arr[i];
      }
    }
  })
}