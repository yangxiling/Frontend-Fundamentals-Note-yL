node.js是JavaScript    runtime(运行时)。

node.js 是非阻塞I/O（Input，Output）

* 阻塞：I/O时进程休眠等待I/O完成后进行下一步
* 非阻塞：I/O时函数立即返回，进程不等待I/O完成。

node.js  是事件驱动：

* I/O等异步操作结束后的通知
* （内部的实现也是）观察者模式

 web是node.js 最好的运行环境

因为web 场景高并发、I/O密集

NodeJs 单线程

#### 常用场景

* Web Server
* 本地代码构建
* 实用工具开发

#### 环境：

* CommonJS（模块规范）

  1.每个文件是一个模块，有自己的作用域

  2.在模块内部module变量代表模块本身

  3.module.exports属性代表模块对外接口

  <font color=brow>*require 规则*</font>

  1.<font color=blue>**/ **</font>表示绝对路径，<font color=blue>**./**</font>表示相对路径

  2.支持js、json、node拓展名，不写依次尝试

  3.不写路径则认为是build-in模块或者各级node_modules内的第三方模块

  <font color=brow>*require 特性*</font>

  module 被加载的时候执行，加载后缓存（只加载一次）

  一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出（绝对 要 避免 循环加载，node里面循环加载不会报错）

*系统内置模块，第三方模块（用npm安装）*

exports = module.exports；（exports是module.exports的快捷方式；但是不能修改exports的指向，例如：

```javascript

```

exports = {

"错误示例❌"：“这种写法改变了exports指向”

a:1,

b:2,

test:100

}；

module.exports = {

"正确示例"：“这是正确的”

a:1,

b:2,

test:100

}

```

```

）

* global（全局对象）

  global下面直接挂载方法：**CommonJS、**

  **Buffer(二进制数据处理)、process(进程)、console、**

  **timer、setImmediate()**

  

* process（挂在global下面）

  *process常用用法：*

  const  {argv,argv0,execArgv,execPath} = process

  const  {env} = process     //打印当前电脑信息

  const  {cwd} = process    //打印当前命令执行路径

<font color=purple>setImmediate()和process.nextTick()很像，但是process.nextTick()最先执行、setTimeout()中间执行、setImmediate()最后执行</font>



**Debug:**

1.node自带的调试工具 Divices

2.IDE 调试（VScode 自带有 IDE调试）

#### 基础API

**path：** normalize(路径矫正)，join(路径拼接)，resolve(相对路径解析成绝对路径)，

basename(文件名)，extname(扩展名)，dirname(文件路径)，

parse(文件路径分析)，format(parse的相反操作)

sep(路径的表示符号)，delimiter，win32，posix

<font color=brow>__ dirname、 __ filename 总是返回文件的绝对路径（文件在物理磁盘的路径）</font>

<font color=brow>process.cwd() 总是返回  执行node命令  所在文件夹 </font>

在require 方法中总是相对当前文件所在文件夹（是绝对路径=>物理磁盘路径）

 **Buffer：** 用于处理二进制数据流；实例类似整数数组，大小固定；

Buffer.byteLength、Buffer.isBuffer()、Buffer.concat()等；

**events：**

所有能出发事件的对象都是EventEmitter类的实例。eventEmitter.on()用于注册监听器，eventEmitter.emit()用于触发事件。

**fs：**

所有文件系统操作都具有 同步 和 异步 的形式。

<font color=blue>异步的形式总是把完成回调作为其最后一个参数。传给完成回调的参数取决于具体方法，但是第一个参数总是预留给异常。如果操作被成功完成，则第一个参数会为null 或 undefined</font>

当使用同步的操作时，发生的异常会立即抛出，可以使用try...catch处理，也可以使用冒泡。

fs.readFile()读文件, fs.writeFile()写文件, fs.rename()重命名，fs.unlink()删除文件，fs.readdir()读文件夹，fs.mkdir()创建文件夹，fs.rmdir()删除文件夹，

fs.watch()

fs.stream()    条件：有方向、数据



<font color=red>**.gitignore**</font>

匹配模式前 **/** 代表项目根目录

匹配模式最后加 **/** 代表是目录

匹配模式前加 **！** 代表取反

*****代表任意字符

**？**匹配任意一个字符

******匹配多级目录

