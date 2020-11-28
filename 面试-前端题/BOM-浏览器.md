#### :question:简述常见的 HTTP 状态码的含义（301，304，401，403）

* 200: 代表成功

* 300:资源重定向。
  * 301-永久重定向，表示资源已经永久的搬到了其他的位置。302-临时重定向。
  * 304-客户端发送附带的请求时，条件不满足（返回304时，不包含任何主体）【意思就是，你请求的资源倒是有，但是你说的条件不满足啊】

* 400:  客户端问题
  * 401-表示发送的请求要有HTTP认证信息或者认证失败了。
  * 403-Forbidden。表示请求的资源禁止访问（被服务器拒绝了）

500：服务器错误  

#### :question:HTTP 中 GET 和 POST 区别

&emsp;:pencil2: A：

1、浏览器在回退时，get**不会重新请求**，但是post会重新请求。【重要】

2、get请求会被浏览器**主动缓存**，而post不会。【重要】

GET和POST本质上无差异，都是HTTP发送请求数据的的方法。都是TCP/IP链接。[链接](https://www.oschina.net/news/77354/http-get-post-different)

GET方式请求浏览器会把Http  header和data 一起发送出去，服务器返回200  OK（返回数据）

POST方式请求：浏览器会先发送header，服务器返回100  continue，浏览器再发送data，服务器返回200  ok（返回数据）

总结就是：GET方式产生一个TCP数据包，POST方式产生两个数据包。

* 由于POST需要验证两次，时间上消耗的多一点，看起来GET比POST效率高。**但实际上网络好**的情况两种方式消耗的时间差别基本可以无视。**网络差的情况**，两次Tcp验证数据包， 在完整性上有非常大的优点。
* 并不是所有浏览器都会在POST中发送两次包，FireFox只发送一次。  
  

#### :question:TCP 三次握手，四次挥手。

&emsp;:pencil2: A：[图解链接](https://www.jianshu.com/p/d3725391af59)

<img src="/Users/yl/Documents/GitHub/Web/面试-前端题/src/imgs/Tcp0.png" alt="image-Tcp" style="zoom: 60%;" />

![image-20201127225943524](/Users/yl/Documents/GitHub/Web/面试-前端题/src/imgs/Tcp.png)

![image-20201127225943524](/Users/yl/Documents/GitHub/Web/面试-前端题/src/imgs/status.png)

#### :question:localstorage、sessionStorage 与 cookie 的区别是什么？

![image-20201125184704811](/Users/yl/Library/Application Support/typora-user-images/image-20201125184704811.png)

超出大小会被静默删除。

Set-Cookie：可以设置名/值。cookie的过期时间，和安全标志（secure）、域、路径。Set-Cookie的设置的这些只是用于告诉浏览器在什么情况下应该在请求中包含cookie，并不会随着请求发送给服务器。发送给服务器的只有名/值。  


#### :question:简述浏览器的渲染过程，重绘和重排在渲染过程中的哪一部分？

&emsp;:pencil2: A：1、根据HTML文件解析生成DOM树；

2、根据CSS文件解析生成CCSOM树；

3、DOM树和CSSOM结合生成render tree（渲染树）；

4、计算渲染树上的每个几点的位置；

5、根据布局进行绘制（paint），最终页面呈现。

计算---->重排，绘制--->重绘。**重绘不会影响重排，重排一定会影响重绘。**

重绘：单单改变元素的外观颜色等。

重排：改变布局，重新排列元素。



#### :question:什么情况下引起重排和重绘？改变 color 会吗？改变 margin 会吗？

&emsp;:pencil2: A:一般情况下，改变元素的颜色外观会引起重绘，改变元素的布局会一起重排。重排一定会引起重绘。

**可能会引起重排的情况：**

<span style="color:deeppink">1、改变window的大小；</span>

<span style="color:deeppink">2、定位或者浮动；</span>

<span style="color:deeppink">3、改变盒模型（margin，padding，win 的童话，height等）；</span>

<span style="color:deeppink">4、添加删除样式。</span>

**减少重绘和重排：**

1、使用translate代替top的使用。

2、用 visibility ：hidden代替display：none。因为visibility是**外观属性**，会引起重绘。后者diaplay会引起重排。

3、把DOM离线修改。先把display设置成display：none。然后离线修改DOM n 多次再把它显示出来。只重排一次。

4、动画实现的速度。动画实现的越快引起的重排次数越多。可以选择使用requestAnimationFrame。

5、CSS选择符是从右往左匹配查找，要避免DOM 树深度过深。

6、将频繁运行的动画变成图层，图层能够阻止 该元素的重排对其它元素的影响。比如video标签，浏览器会自动把该节点变成一个图层。



**很重要的一点是重绘和重排是和事件循环（Event loop）有关。**

1. 因为Event loop执行完Microtasks（微任务）后，会判断document需不需要刷新。浏览器每16ms才刷新一次。

2. 浏览器会判断有没有resize或者scroll，如果有的话就触发事件。所以resize和scroll也是至少16ms才触发一次，并且自带节流的功能。

3. 判断是否触发了 media query

4. 更新动画并且发送事件

5. 判断是否有全屏操作事件

6. 执行 requestAnimationFrame 回调

7. 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好。

8. 更新界面

9. 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。

以上内容来自于 HTML 文档  


#### :question:简述浏览器的垃圾回收机制?

&emsp;:pencil2: A:  



#### :question:简述什么是 XSS 攻击以及 CSRF 攻击？如何防止攻击？(背住原理和防御方法)

#### CSRF：基本概念、攻击方式、防御措施

**1、CSRF：基本概念**

CRSF:（Cross-site Request Forgery）**跨域请求伪造**



**2、CSRF的攻击原理**

CSRF简单点说就是第三方利用网站对用户的信任，利用用户的登录状态伪造恶意的请求。



**3、CSRF如何防御**

**方式一：Token验证**

服务端下发一个随机的Token给客户端。

客户端再次发起请求的时候要携带这个Token。

服务验证这个Token是否有效。

**方式二：**



**方式三：Reference**

通过验证Reference判断是否是第三方请求。只接受本站的请求，第三方请求就拒绝。

#### XSS：基本概念、攻击方式、防御措施。

**1、XSS的基本概念**

XSS：（Cross Site Scripting）**跨域脚本攻击**

**2、攻击原理**

**3、防御原理**

### :question:输入URL  实现页面的过程?

1、输入网址。

2、DNS解析，返回IP地址。

3、浏览器和服务器进行Tcp连接（三次握手）。

4、浏览器向服务器发送HTTP请求。

5、服务器处理请求。

6、服务器返回一个HTTP响应报文。

7、浏览器根据请求回来的数据解析数据渲染页面。

8、浏览器和服务器断开链接（四次挥手）

### :question:首屏渲染优化

:pencil2:A：​

