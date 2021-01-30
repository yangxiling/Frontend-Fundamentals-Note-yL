Service  Worker

主要围绕install、activate、fetch三个生命周期来实现。

```js
//第一不能访问DOM
//第二不能访问 window等
//只能访问self
self.addEventListener('install',event=>{
  console.log('install',event);
  event.waitUnitl(new Promise(resolve=>{
    setTimeout(resolve,4000)
  }))
});
self.addEventListener('activate',event=>{
  console.log('activate',event)
});
self.addEventListener('fetch',event=>{
  console.log('fetch',event)
});
```

