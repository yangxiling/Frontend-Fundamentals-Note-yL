

## js基础：

### ECMAScript：

### :question:1. const、let、var关键字区别？

&emsp;:pencil2:A: 

- let和var的作用差不多。

区别：1.let声明的变量是块作用域，var声明的变量是函数作用域。var会有声明变量提升，let声明的变量不会在作用域中提升。2.全局声明：使用let在全局作用域声明的变量不会成为window属性（var声明的则会成为window对象的属性）

- const行为和let基本相同。唯一重要的区别是const声明变量时，必须同时初始化变量。且尝试修改const声明的变量会导致错误。

__声明的最佳实践风格就是: 不使用var。const优先，let次之__

#​#​#​ :question:2. 简述 Javascript 的数据类型?（应该着重考察symbol）

&emsp;:pencil2:A:Number、String、Bloonean、Null、Undefined、Object和Symbol 七种数据类型

### :question:3.​  Javascript 中 == 与 === 的区别是什么？

&emsp;:pencil2:A:相等（==）操作符会进行强制的类型转换。全等操作符不会，只有两个值完全相等才会返回true。相等运算符（null == undefined）为true，全等为false。【实际上undefined是null派生出来的一个对象，他俩很相似，所以相等运算符为true。对于相等运算符而言他俩是不同的数据类型】

由于相等操作符会进行类型转换，所以推荐使用全等操作符。这样有助于保持代码中数据类型的完整性。

:question:6. 简述 Javascript 原型以及原型链

&emsp;:pencil2:A:一个对象在创建的时候都会在其内部初始化一个属性，就是prototype（原型）。

当我们访问对象属性的时候，首先会在这个对象的内部进行查找，如果找不到就会到它的原型上查找，它的原型还会有自己的原型，就这样一级一级查找下去就形成了原型链。



:question:7. 简述 Javascript 中 this 的指向有哪些？

* 以函数调用的时候，this指向window。

* 以方法调用的时候，this指向调用它的对象。

* 以关键词new创建的构造函数，如果返回值是对象就指向返回值，否值指向创建的对象。

* 使用call/apply调用时，this是指定的那个对象。



:question:8. 箭头函数和普通函数的区别是什么？

&emsp;:pencil2:A:0.箭头函数语法更简洁、清晰；1.箭头函数没有this，它的this指向其上下文的this；2.箭头函数不能使用arguments、super和new.target，也不能用作构造函数。3.箭头函数没有prototype属性。



:question:9. 什么是闭包，什么是立即执行函数，它的作用是什么？简单说一下闭包的使用场景？

&emsp;:pencil2:A:函数A返回一个函数B，函数B中使用了函数A变量，函数B就是闭包。

立即执行函数:__声明一个匿名函数并马上调用它。__作用就是创建一个独立的作用域。可以解决闭包内存泄漏的问题。

闭包使用场景：1.可以用闭包实现公共方法，访问位于包含作用域中的变量。

2.可以访问私有变量的公共方法（特权方法）。

_不是十分必要的情况下避免使用闭包。因为作用域一直不释放，无法进行垃圾回收，过度占用内存_



:question:10. JavaScript 中的严格模式是什么，有什么作用？

&emsp;:pencil2:A:严格模式：是采用具有限制性JavaScript变体的一种方式，从而使代码脱离了“稀松懒散”的模式。

1.严格模式通过__抛出错误__消除一些原有的__静默错误__。

2.严格模式修复了一些导致JavaScript引擎难以执行优化的缺陷：有时候相同的代码，严格模式比非严格模式运行的更快。

3.严格模式__禁用了__在ECMAScript未来版本中可能会定义的一些语法。



:question:11.作用域链？

&emsp;:pencil2:A:内部函数访问外部函数的变量，采用的是链式查找的方式来决定取哪个值。这种结构称之为作用域链。

全局函数无法访问局部函数的内部细节，但是局部函数可以访问其上层函数的细节，直至全局细节。



:question:..Javascript 可以保存的最大数值是多少

&emsp;:pencil2:A:js可以表示的最大数值保存在number.MAX_VALUE中，可以表示的最小数值保存在number.MIN_VALUE中

 number.MAX_VALUE :1.797e+308

number.MIN_VALUE:5e-324;  


### :question:简述ES6新特性

&emsp;:pencil2:A:见下几题☟

### :question:promise有哪些状态？简述Promise.all的实现原理。

&emsp;:pencil2:A:promise是用来异步编程的，可以看成是一种状态机。初始状态是pending。可以通过resolve函数或者reject函数，将状态改变为resolved或者rejected。状态一经改变就永远不会变。

promise有then函数，该函数返回一个新的promise实例。

Promise.all方法接收一个含有promise实例的数组作为参数，返回一个promise对像。

如果数组中的所有promise返回的都是resolved状态，Promise.all的状态才会是resolved。如果数组中有rejected状态，那么Promise.all就返回第一个reject函数的返回值。

 ### :question:简述常见异步编程方案 (promise, generator, async) 的原理

&emsp;:pencil2:A:他们三个都是用来异步编程的。

**generator**是生成器。给函数加上*号，就代表是gennerator函数，这个函数就有next()方法。通过yield控制函数执行的步骤，调用next()方法函数可以继续执行被暂停的代码。

**promise**见上题。

**async**的返回值是一个promise，在函数内部使用await来控制异步执行。



### :question:proxy

&emsp;:pencil2:A：proxy是ES6新增的功能，可以用来自定义对象中的操作

`let p = new Proxy(target,handler)`

使用proxy可以很方便实**现数据的绑定和监听**

### :question:简述 Javascript 中的防抖与节流的原理并尝试实现★★★

&emsp;:pencil2:A：函数防抖是只个顺序的调用（点击、提交）合并为一次（点击）。

节流就是每隔多久才会执行一次函数（如resize、scroll等频繁发生的事。比较适合于应用于有关动画的场景）

节流场景：**无限滚动**

用户向下滚动无限滚动页面，需要检查滚动位置距底部多远，如果邻近底部了，我们可以发 AJAX 请求获取更多的数据插入到页面中。

* **debounce**：把触发非常频繁的事件（比如按键）合并成一次执行。
* **throttle**：保证每 X 毫秒恒定的执行次数，比如每200ms检查下滚动位置，并触发 CSS 动画。
* **requestAnimationFrame**：可替代 throttle ，函数需要重新计算和渲染屏幕上的元素时，想保证动画或变化的平滑性，可以用它。注意：IE9 不支持。

### :question:简述 Javascript 的柯里化与逆柯里化★★★

&emsp;:pencil2:A：

**柯里化：**把一个接受多个参数的函数    变成一个接受单个参数的函数。

主要作用：**提高函数的专用性**

**柯里化的好处：**

1、参数复用：对于一些有很多参数相同的函数调用情况，柯里化就非常适用了。

2、提前返回：提前返回函数避免重复操作，提高效率。

3、延迟执行：在所有参数接收完毕后延迟统一执行

**逆柯里化：**柯里化的逆过程，目的是扩大函数的适用范围。

#### 经典用例：

> 数组的push方法只能用于数组，我们现在通过反柯里化提取push函数，让它也适用于Object对象。

