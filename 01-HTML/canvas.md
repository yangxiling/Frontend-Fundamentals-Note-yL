canvas:2D

<span style="color:orange">标准的鼠标点击在  canvas中  方法：</span>

<font color=blue>**x=event.clientX+ele.getBoundingClientRect().left;**</font>

<span style='color:blue'>**y=event.clientY+ele.getBoundingClientRect().top;**</span>

<span style='color:blue'>**getBoundingClientRect():  是JS方法**</span>

实例：<canvas id="canvas"  width=300 height=300></canvas>

 获取canvas：

获取canvas上下文： canvas.<span style='color:red'>getContext</span>("2d")

**//很重要，使用频率最高**

```cxt.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
cxt.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```



cxt.beginPath()

cxt.moveTo(x, y)     起始点坐标

cxt.lineTo(x, y)       画线点坐标

cxt.closePath()      会自动封闭图形



cxt.lineWidth  =number                   线条属性：线的宽度

cxt.lineCap = butt(default) | round | square   线条属性：画线的帽类型

cxt.lineJoin = miter(default) | bevel | round   尖角，平角，圆角

cxt.miterLimit = 10     只有在使用了lineJoin=miter  后才有效



cxt.strokeStyle = "color"      画线的样式

cxt.stroke()                  		   画线



cxt.fillStyle = "color"            填充的样式

cxt.fill()                   		       填充



<span style='color:red'>cxt.clearRect(x, y, canvs.width, canvas.height)    刷新画布，一般用于动画</span>



cxt.rect(x,y,width,height)             画一个矩形

cxt.fillRect(x,y,width,height)           画一个填充矩形

cxt.strokeRect(x,y,width,height)       画一个边框矩形

cxt.arc(x, y, radius, startingAngel, endAngel, false)  

false:顺时针，true：逆时针

cxt.ellipse(x, y, radiusX, radiusY, rotate, startAngel, endAngel);  画一个椭圆



**canvas 的图形绘制与保存：**

<span style='color:deeppink'>cxt.save()；</span>

<span style='color:deeppink'>cxt.restore();</span>



**图像变换：**

cxt.translate(x,y)        位移

cxt.rotate(deg)           旋转

cxt.scale(sx,sy)           缩放 



cxt.transform(a,b,c,d,e,f)  

a，d   水平，垂直 缩放

b，c   水平，垂直 倾斜

e， f   水平，垂直 位移

cxt.setTransform(a,b,c,d,e,f)  重置transform



线性渐变色：Linear  Gradient

let grd = cxt.creatLinearGradient(xStar, yStar, xEnd, yEnd)

grd.addColorStop(0-1.0,"color");  可添加多个

cxt.fillStyle = grd;



径向渐变：Radial  Gradient

let grd = cxt.creatRadialGradient(xStar, yStar,  R，xEnd, yEnd，R)//画圆

grd.addColorStop(0-1.0,"color");  可添加多个

cxt.fillStyle = grd;



cxt.createPattern(img | canvas画布 | video, repeat-style)  

repeat-style:no-repeat | repeat-x | repeat-y | repeat



以上渐变方法可用在  fillStyle  和  strokeStyle  上 

**曲线绘制：**

cxt.arc(x, y, radius, startAngel,endAngel,false)

cxt.moveTo(x0, y0)

cxt.arcTo(x1, y1, x2, y2,radius)    画弧



<span style='background-color:yellow'>贝塞尔曲线：</span>

cxt.moveTo(x0, y0)；

cxt.quadraticCurveTo(x1, y1, x2, y2);    二次贝塞尔曲线

cxt.bezierCurveTo（x1, y1, x2, y2, x3, y3);    三次贝塞尔曲线



**文字渲染：**

cxt.font= “字形  字号  字体 ”

font: font-style, font-size, font-weight,  font-family,  font-variant,

cxt.fillText(string, x, y, [maxlength])   x,y文字渲染的位置,maxlength设置文字的宽度

cxt.strokeText(string, x, y, [maxlength])   x,y文字渲染的位置;



文本对齐：

cxt.textAlign = left | center | right    调整文本水平对齐方式

cxt.textBaseline = top | middle | bottom   调整文本垂直对齐



cxt.measureText(string).width   文本的度量



阴影：

cxt.shadowColor



cxt.shadowOffetX

cxt.shadowOffetY



cxt.shadowBlur      阴影的模糊成都



cxt.globalAlpha = 1.0    设置全局透明度

cxt.globalCompositeOperation = "source-over(default) | destination-over"

绘制图形的遮挡效果



cxt.clip()    将当前创建的路径，设置为当前剪切路径的方法

<span style='color:red'>非零环绕原则；用来判断路径的走向</span>



<span style='color:red'>cxt.isPointInPath(x, y)   判断是否在规划的路径（一个图形 ）内</span>



canvas:3D(webGL)