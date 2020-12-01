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

### :question: 简述 CSS 盒模型

:pencil2:A: 通过box-sizing：border-box|content-box  来转换两种盒模型。

一般再自适应布局的时候，元素设置了padding的时候会撑破布局，就会用到border-box.s

**标准盒模型：width/height==>padding==>border> margin**

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

