#### 1.instance（实例）：

app.$data

app.$props

app.$el

app.$options

app.$root === app

app.$childern

app.$slots

app.$scopeSlots

app.$refs  快速定位到某一html节点 

app.$isServer

方法：

app .$watch()

app.$on

app.$emit

app.$once

app.$forceUpdate

app.$set()  添加，设置属性

app.$delete()  删除属性

#### 2.lifeCircle（生命周期）：

beforeCreate，create，beforeMount,mounted,

beforeUpdate,updated,

beforeDestroy,destroyed

生命周期方法：

#### 3.vue原生指令：

自定义指令：bind

​						inserted

​						update

​						componentUpdated

​						unbind

v-text 和{{  }}（数据绑定）  作用基本差不多

v-html 和 innerHTML  作用一样

v-show：

v-if，v-else，v-else-if

v-for=“(val.key,index) in obj”

v-for=“(item,index) in arr”

v-bind:   简写   :   只能绑定属性

v-on     简写   @

v-bind：可以给任何属性（只能是属性）赋值，是从vue到页面的单向数据流

v-model   双向绑定，一般用在输入组件

用在input上，例如多选框，单选框

语法糖  ==> v-bind + input  输入

v-model：只能给具备value属性 的元素进行双向数据绑定（必须使用的是有value属性的元素）

v-model的修饰符  .nunber、.trim（去除首尾空格）、.lazy(懒加载，变为change事件)

v-pre  节点里面的内容都不会解析，内容是什么就显示什么

v-cloak

v-once   只执行一次，节省开销，dom

<font color=blue>**双向绑定 or 单向数据流**</font>

* Vue是单向数据流，不是双向绑定
* Vue 的双向绑定不过是语法糖  ==> v-bind + input输入
* Object.defineProperty 是用来做响应式更新的，和双向绑定没关系

**属性**

* 计算属性：cumputed：有缓存，开销小，对性能影响较小（操作的必须是响应式数据）

* 监听器watch：监听某一数据的变化，然后进行某些操作

//监听到了某个操作 然后需要进行一些操作 用watch

watch：更加灵活、通用；watch中可以执行任何逻辑，如函数节流，Ajax异步获取数据。

// computed 和 watch使用的时候千万不要修改监听或者依赖的属性

//非常容易出现问题（例如：死循环等，使问题变得很复杂）

**cumputed能做的，watch都能做，反之则不行。**

能用cumputed尽量用cumputed。

methods： 

### 5.vue组件：

定义组件：

*const* CompOne = {

props:{

},

template:`<div></div>`,

data(){

return{

}

},

}

注册组件：

//[Vue.component("CompOne",CompOne)//](http://vue.component(/) 注册组件方法一

new Vue({

// components: {//注册组件方法二

// CompOne:CompOne

// },

el:'#root',

template:`<div><comp-one></comp-one></div>`

})

extend  组件的复用、扩展，

this.$parent

插槽：slot，作用域插槽：slot-scope，

 获取组件实例：ref

跨层级组件通讯：provide，inject

### 路由：

<font size=4 color=blue>使用方式</font>

* 提供一个路由配置表，不同路由对应不同组件的配置
* 初始化路由实例 new VueRouter()
* 挂载到 Vue实例上
* 提供一个路由占位，用来挂载URL匹配到的组件

![image-20200617172239810](/Users/yl/Library/Application Support/typora-user-images/image-20200617172239810.png)

路由类型：* Hash模式：丑，无法使用锚点定位

​				   *History模式：需要后端配合，IE9不兼容（可使用强制刷新处理） 

router配置：{

mode:'history',//默认路由是哈希路由解析有问题，不利于SEO，设置路由为history

// base:'/base/', //路径设置

linkActiveClass:'', //给路由加上全局class 样式

linkExactActiveClass:'', //给路由加上全局class 样式

fallback:true,//history路由的方式不支持的时候，vue回自动转换成哈希路由

// scrollBehavior(to,from,savedPosition)//页面跳转后位置 滚动的情况

}

router-link：实现原理其实就是<a>标签

vue要解析某一json对象的时候，要用v-bind(:)

children:

<font color= blue>*4-3章讲述：*,讲述组件和路由解耦，可使组件的复用性更高</font>

组件中尽量不要使用$route、$router，使组件解藕，提高组件的复用性

*4-4，router-vue导航守卫：*

router.beforeEach((to, from,next)=>{next()})

router.beforeResolve((to, from,next)=>{next()})

router.before

组件内钩子： beforeRouteEnter(){},

beforeRouteUpdate(){},

beforeRouteLeave(){},    

 

<font color=green>异步路由，按需加载，提高首屏加载的速度</font>

<font color=red>component:import("../");//很简单</font>

### Vuex:

$store:state, mutation, getter, action 

state:

getter:类似于computed，组装数据的作用

**mutation**(突变):修改同步数据， mutation的方法只能传入两个参数（state，{}）。通过**commit**来调用（用法：在组件里this.$store.commit("方法名",{})）。

 mutation主要用来修改state里面的数据，代码规范，state里面的数据修改都写在mutation里面，如果写在外面就失去了store的意义，还不如不用store。

**action**:修改异步数据，action的方法只能传入两个参数（store，{}）,通过**dispatch**来调用（用法：在组件里this.$store.dispatch("方法名"，{})）

<font color=blue>**vuex 之模块：可以很好的梳理代码 modules**</font>

**vuex其他API：**

<span style="background:pink">*const* store = createStore();</span>

1.<span style="background:pink">store.registerModule('c', {state:{text:2}})//动态注册模块</span>

2<span style="background:pink">.store.unregisterModule('c')//解绑注册的模块</span>

3.<font color=blue>store.watch((*state*)</font>*=>*state.count+1,(*newCount*)*=>*{

//监听到第一个函数发生变化，执行第二个回调函数

*console*.log('new count watched:',newCount);

});

4.<font color=blue>store.subscribe((*mutation*,*state*)</font>*=>*{

// 一个回调函数，监听每一个被使用的mutation函数

*console*.log(mutation.type);//mutation.type是执行函数的名称

*console*.log(mutation.payload)//mutation.payload 函数执行结果

})

5.<font color=blue>store.subscribeAction((*action*,*state*)=></font>{

// 回调函数，监听每一个被使用的action函数

*console*.log(action.type);

*console*.log(action.payload)

})



**工程创建：**终端命令行输入：vue create 文件名

函数式组件：可以提供临时变量使用等。

![image-20200610232822262](/Users/yl/Library/Application Support/typora-user-images/image-20200610232822262.png)

![image-20200610232851278](/Users/yl/Library/Application Support/typora-user-images/image-20200610232851278.png)

![image-20200610232922419](/Users/yl/Library/Application Support/typora-user-images/image-20200610232922419.png)

![image-20200610232946041](/Users/yl/Library/Application Support/typora-user-images/image-20200610232946041.png)

**组件通信：**

跨层级组件通讯：provide、inject

子节点向父节点通信，一般通过 **属性** 的传递方式进行通信,

父节点向子节点通信，通过 **事件** 的方式this.$emit()

<font color=blue>**组件间跨层级获取组件实例：**</font>

callback ref

* 主动通知（setXxxRef）
* 主动获取（getXxxRef）



<font color=brown>**数组有哪些方法支持响应式更新。如不支持如何处理，底层原理如何实现？**</font>

* 支持：push()、pop()、shift() 、unshift() 、splice()、sort()、reverse()

特点：会改变原数组的方法  支持响应式更新

* 不支持：filter() 、concat() 、slice()

特点：不改变原数组的方法

不支持的可以使用this.array = 一个新数组。

* 底层原理实现：同样是使用Object.defineProperty对数组方法进行改写

<font color="blue">**状态管理 Vuex：**</font>

![image-20200616165142483](/Users/yl/Library/Application Support/typora-user-images/image-20200616165142483.png)

![image-20200616165512380](/Users/yl/Library/Application Support/typora-user-images/image-20200616165512380.png)

![image-20200616165736146](/Users/yl/Library/Application Support/typora-user-images/image-20200616165736146.png)

<font size=5 color="blue">核心概念</font>

* State —— this.$store.state.xxx  ——mapState  取值
* Getter —— this.$store.getters.xxx ——mapGetters  取值
* Mutation —— this.$store.commit("xxx")  ——mapMutation 赋值
* Action —— this.$store.dispatch("xxx")  ——mapAction  赋值
* Module

<font size=5 color=blue>底层原理</font>

* State ：提供一个响应式数据
* Getters : 借助Vue的计算属性 computed 来实现缓存
* Mutation :  更改 state 方法
* Action :  触发 mutation 方法
* Module :<font color=blue> Vue.set 动态添加 state 到响应式数据中 </font>





**UI组件库对比**

![image-20200617174001031](/Users/yl/Library/Application Support/typora-user-images/image-20200617174001031.png)



<font size=4 color=blue>提升开发效率和体验的常用开发工具：</font>

Vuetur、 ESLint、 Prettier、 Vue DevTool

<img src="/Users/yl/Library/Application Support/typora-user-images/image-20200617174345788.png" alt="image-20200617174345788" style="zoom:50%;" />

<img src="/Users/yl/Library/Application Support/typora-user-images/image-20200617174520747.png" alt="image-20200617174520747" style="zoom:50%;" />

Prettier：格式化 和ESLint使用时要配置一下，防止有些功能冲突



<font size=4 color=blue>单元测试重要性及使用</font>

重要性：

使用方式：

* jest 或 macha
* @vue/test-utils
* sinon