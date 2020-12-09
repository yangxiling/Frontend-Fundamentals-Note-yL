

### :question:什么是可继承元素和不可继承元素？

**继承**：子元素继承父元素的属性

一、无继承性的属性
    1、display：规定元素应该生成的框的类型
    2、文本属性：

* ​        vertical-align：垂直文本对齐
* ​        text-decoration：规定添加到文本的装饰
* ​        text-shadow：文本阴影效果
* ​        white-space：空白符的处理
* ​        unicode-bidi：设置文本的方向

​    3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left
​    4、背景属性：background、background-color、background-image、background-repeat、
​    5、定位属性：float、clear、position、top、right、bottom、left、-width、overflow、z-index
​    6、生成内容属性：content、counter-reset、counter-increment
​    7、轮廓样式属性：outline-style、outline-width、outline-color、outline
​    8、页面样式属性：size、page-break-before、page-break-after
​    9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

#### 二、有继承性的属性
​    1、字体系列属性

* ​        font：组合字体
* ​        font-family：规定元素的字体系列
* ​        font-weight：设置字体的粗细
* ​        font-size：设置字体的尺寸
* ​        font-style：定义字体的风格
* ​        font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
* ​        font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。
* ​        font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

​    2、文本系列属性

* ​        text-indent：文本缩进
* ​        text-align：文本水平对齐
* ​        line-height：行高
* ​        word-spacing：增加或减少单词间的空白（即字间隔）
* ​        letter-spacing：增加或减少字符间的空白（字符间距）
* ​        text-transform：控制文本大小写
* ​        direction：规定文本的书写方向
* ​        color：文本颜色

​    3、元素可见性：visibility
​    4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout
​    5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style
​    6、生成内容属性：quotes
​    7、光标属性：cursor
​    8、页面样式属性：page、page-break-inside、windows、orphans
​    9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

**三、所有元素可以继承的属性**
    1、元素可见性：visibility
    2、光标属性：cursor

四、内联元素可以继承的属性
    1、字体系列属性
    2、除text-indent、text-align之外的文本系列属性

五、块级元素可以继承的属性
    1、text-indent、text-align



### CSS3 如何实现渐变色？

:pencil2:A: background：线性 (由 [`linear-gradient`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient) 函数创建)，径向(由 [`radial-gradient()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient) 函数创建) 和圆锥 (由 [`conic-gradient`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/conic-gradient) 函数创建)

### :question: 1>简述 CSS 盒模型(盒模型系列)

**标准盒模型：width/height==>padding==>border> margin**

```javascript
/*设置当前盒子为标准盒模型  默认*/
box-sizing:content-box;

/*设置当前盒子为 IE盒模型*/
box-sizing:border-box;
```

一般在自适应布局的时候，元素设置了padding的时候会撑破布局，就会用到border-box



### :question:2>JS如何设置、获取盒模型对应的宽和高？(盒模型系列)

```javascript
//方式一  通过DOM元素style样式获取：
element.style.width/height;
```

**这种方式有局限性，只能获取行内样式**

```js
//方式二  **通用型**
window.getComputedStyle(element).width/heght;
```

**通用型：方式二能兼容 Chrome、火狐。是通用型方式。**

```javascript
//方式三（IE独有的）
element.currentStyle.width/height;
```

**和方式二相同，但这种方式只有IE独有。获取到的即时运行完之后的宽高（三种css样式都可以获取）。**

```javascript
//方式四	
element.getBoundingClientRect().width/height;
```

此 api 的作用是：获取一个元素的绝对位置。绝对位置是视窗 viewport 左上角的绝对位置。

此 api 可以拿到四个属性：left、top、width、height。



### :question:3>margin塌陷（或叫margin重叠/边距重叠的问题）(盒模型系列)

:pencil2:A: **在标准文档流里。竖直方向的margin不叠加，只取最大的margin展示。（水平方向没有塌陷现象）**

**PS：如果盒子脱标了，就不会出现margin塌陷的现象。**

<font color=blue>处理父子元素的关系：**善于用父亲的padding，而不是儿子的margin。来表达父子关系。**</font>

**margin是表示兄弟关系的。padding用来表示父子关系。**



### :question:简述 CSS 有哪些上下文类型？

块级格式上下文（BFC）、网格布局格式化上下文（GFC）、自适应格式化上下文（FFC）、行内格式化上下文（IFC）。

**BFC(块级格式化上下文)  可以理解为一个独立的区域。**

<font color=deeppink>**BFC原理/布局规则：**</font>

1、BFC**内部的子元素**在垂直方向上会发生边距重叠。

2、计算BFC高度的时候，浮动的子元素参与计算。

3、**BFC不与旁边的`float box `区域重叠。**

4、BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。

**生成BFC方法：**</font>

* <font color=deeppink>float</font>   的值不为  `none`；
* <font color=deeppink>overflow </font> 的值不为  `visible`；
* <font color=deeppink>display </font> 的值为  `inline-block``table-cell``table-caption`；
* <font color=deeppink>position </font> 的值为  `absolute`或`fixed`；



### :question: 什么情况下 z-index 不生效?

:pencil2:A：1、只有定位了的元素（relative/absolute/fiexd/sticky）才可以使用z-index ，如果元素没有用定位z-index 失效。

2、浮动的元素  z-index失效。

3、z-index有从父现象，如果父元素的z-index值小，那么子元素的z-index再大也没有用，这个时候子元素的z-index失效。



### :question:定位

:pencil2:A: sticky：粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位



### :question:如何实现 div 元素水平垂直居中

[:pencil2:A: 水平垂直居中](./src/position.html)

### :question:如何使用 flex 实现两栏布局？

```
.container{
	display:flex;
}
.container .box1{
	width:50%;
	height:100px;
}
.container .box2{
	flex:1;
	height:100px;
}
```

### :question:实现三栏布局？

[float、position、flex、grid](./src/threePart.html)

[参考链接](https://github.com/qianguyihao/Web/blob/master/13-%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/01-%E9%9D%A2%E8%AF%95%E5%BF%85%E7%9C%8B/01-%E9%A1%B5%E9%9D%A2%E5%B8%83%E5%B1%80.md)



###  :question:如何解决 CSS 类名重名？

:pencil2:A：

### :question:CSS3 有哪些新特性(根据自己的项目来回答)

:pencil2:A：flex、transform（顺带说可以用translate来实现元素的水平垂直居中），border-radius、border-show（给盒子加阴影）等。

### :question:flex 常用的属性有哪些？flex: 1 1 0 是什么意思？

:pencil2:A：

<font color=blue>**fater元素：**</font>

**1、设置子容器沿主轴排列：justify-content**

位置排列：`flex-start ` , `flex-end` , `center`

分布排列：`space-between` , `space-around`

**2、设置子容器如何沿交叉轴排列：align-items**

位置排列：`flex-start , flex-end , center`

基线排列：`baseline`

拉伸排列：`stretch`

<font color=deeppink>**son元素：**</font>

**1、flex  自动填充父元素剩余空间，子容器的伸缩比例由flex属性确定**

flex：flex-grow| flex-shrink| flex-basis

**2、单独设置子容器如何沿交叉轴排列：align-self**

说明：每个子容器也可以单独定义沿交叉轴排列的方式，**此属性的可选值与父容器`align-items`属性完全一致，如果两者同时设置则以子容器的`align-self`属性为准。**

位置排列：flex-start , flex-end , center

基线排列：baseline

拉伸排列：stretch



### :question: rem 与 em 的区别以及使用场景

:pencil2:A：px是固定像素   一旦设定就无法因适应页面而改变。

1、em 和 rem  是相对的长度单位（即长度不是定死的，更适应响应式布局）

**区别：<font color=red>em是相对父元素进行调整，rem是相对根元素</font>**

rem中 r的意思是root

详细介绍：em：

* 子元素**字体**大小的em，是相对于父元素**字体**大小的。

* 元素的width/height/padding/margin的em的话是相对于该元素的font-size

详细介绍rem：

* rem是全部的长度都相对于根元素，根元素是谁？< html >元素



### :question:CSS 的选择器优先级是怎样？

:pencil2:A：id选择器  >  class选择器   > 标签选择器

!import的选择器优先级最高。

使用 !import是个坏习惯 ,要避免使用。使用import会破坏样式表中固有的级联样式。使得找bug调试变得困难。

**更好地利用 CSS 级联属性**



### :question:什么是替换元素与非替换元素（**HTML**）

**可替换元素**

<font color=deeppink>可替换元素的展示效果不是由css来控制的，**这些元素是一种外部对象。**他们外观的渲染，是独立于css。</font>

典型可替换元素：

* iframe
* img
* video
* embed

在特定情况下会替换的元素：< audio>   < canvas>等。

**非替换元素**

* 非替换元素是其内容包含在文档中的元素，其内容可以受`CSS`渲染控制。
* 非替换元素的内容不会超出`CSS`的模型范围，`CSS`在渲染时会考虑非替换元素的内容。
* `HTML`的大多数元素是不可替换元素，即其内容直接表现给浏览器，例如`<div>`、`<p>`、`<h1>~<h6>`、`<table>`等等等等。