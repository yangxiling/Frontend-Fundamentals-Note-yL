**create-react-app 创建项目**

## 什么是纯函数

一个函数的返回结果只依赖于它的参数，并且在执行过程中没有任何副作用。这样的函数称之为纯函数。

* **返回结果只依赖  参数**
* **执行过程没有副作用**

纯函数非常靠谱，执行一个纯函数不会担心它会干什么坏事，它不会产生什么不可预料的行为，也不会对外部产生影响。不管何时何地，你给它什么它就会乖乖吐出什么。

如果应用程序大多使用的都是纯函数，那么程序调试、测试起来会非常的方便。

如 arr1 = arr.slice()

## JSX本质是什么？（对比vue模板编译）

就是用createElement这个方法编写DOM。createElement就相当于是h函数

render函数执行完返回Virtual  DOM  tree（虚拟DOM树）



## React事件和DOM事件的区别（Vue和React对比，非常重要）

Vue中的event事件是原生事件（MouseEvent）。就是DOM事件。



1、React中的event事件不是原生，是合成事件--->SyntheticEvent。但是模拟出了 DOM 事件所有能力

2、SyntheticEvent里面的event.nativeEvent是原生事件对象

3、React所有事件，都被挂载到 document 上。

4、和   DOM  事件不一样，和 Vue事件也不一样。





## React组件生命周期

单组件生命周期

父子组件生命周期

注意SCU

## React发起ajax应该在哪个生命周期

同Vue

ComponentDidMount



## setState场景题

![image-20201208201825915](/Users/yl/Library/Application Support/typora-user-images/image-20201208201825915.png)



## 渲染列表，为何使用key

 同Vue。必须用key，切不能是index 和 random

diff算法中通过tag和key来判断，这个节点是否是sameNode

减少渲染次数，提升渲染性能



## 组件之间如何通讯？0

 父子组件props

自定义事件

Redux和Context



## 函数组件 和 class组件 区别

纯函数，输入props，输出JSX

没有实例，没有生命周期，没有state

不能扩展其他方法 



## 什么是受控组件

表单的值，受state控制

需要自行监听onChange，更新state

对比非受控组件（可能问的更多一点）



## 何时使用异步组件

同Vue

加载大组件

路由懒加载

 

## 多个组件有公共的逻辑，如何抽离？

高阶组件 HOC

Render  Props

mixin已经被react废弃（和Vue的mixin一样的）



## Context是什么，如何应用？

 父组件，向其下所有子孙组件传递信息

如一些简单的公共信息：主题色、语言等

复杂的公共信息，请用redux（比如数据管理，业务数据比较复杂）

## shouldComponentUpdate 用途

性能优化

配合 “不可变值” 一起使用，否则会出错



## PureComponent有何区别？

实现了浅比较的 shouldComponentUpdate

优化性能

但要结合不可变值使用





## 简述 React 中的 Effect Hook 机制



## 简述 React setstate 原理





## redux单项数据流（会写，考频高）







## redux如何进行异步请求

使用异步 action

如 redux-thunk 



## react-router如何配置懒加载

 ![image-20201208203224390](/Users/yl/Library/Application Support/typora-user-images/image-20201208203224390.png)





## React性能优化

渲染列表使用key

自定义的事件、DOM事件及时销毁

合理使用异步组件（异步加载大组件）

减少函数 bind  this 的次数

 合理使用 SCU  PureComponent 和memo

 合理使用 Immutable.js



webpack层面的优化

前端通用性能优化

使用SSR



## React和Vue的区别

都支持组件化

都是数据驱动视图

都使用vdom操作DOM

### 区别

React使用JSX拥抱  JS（就是在写js），Vue使用模板拥抱   html（在写html）。

React是函数式编程，Vue是生命式编程。

React需要自力更生，Vue把想要的都给你