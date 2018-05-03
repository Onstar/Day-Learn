[TOC]

# `Node`重要的`API`

## 一 、 命令行工具(``CLI`)以及`FS API`：首个`Node`应用

### 1. 处理进程(`stdio`)的`stdin`以及`stdout`相关`API`

  `stdio`是全局`process`对象的一部分。  

### 2. 文件系统(`fs`)相关`API`

#### 2.1 流 

`process` 全局对象中包含了三个流对象，分别对应三个`UNIX`标准:  
- **stdin** : 标准输入
- **stdout** : 标准输出
- **stderr** : 标准错误  

: `stdin`是一个可读流，而`stdout`和`stderr`都是可写流。  

#### 2.2 `Stream API`

`fs`模块允许通过`Stream API`来对数据进行读写操作。  
和`readFile`及`writeFile`方法不同，它对内存的分配不是一次完成的。  

```JS 
const fs = require("fs");
fs.readFile('my-file',function(err,contents){
    //对文件进行处理
})
//上面的回调函数，必须等到整个文件读取完毕、载入到RAM、可用的情况下才会触发。  
//下面的例子，每次会读取可变大小的内容块，并且每次读取后会触发回调函数：  
let stream = fs.createReadStream('my-file.text');
stream.on('data',function(chunk){
    //处理文件部分内容
})
stream.on('end',function(chuank){
    //读取完毕
})
```

3. `process.argv`

  包含了所有node程序运行时的参数值。  
  `console.log(process.argv)`

### 3. 工作目录
4. `process.cwd()`

  获取当前工作目录(即，在哪个目录下运行的node).

  * 4.1 `__dirname`

    获取执行文件时，该文件在文件系统中的目录。 
  * 4.2 `__filename`

    获取执行文件时，该文件在文件系统中的完整路径。

5. `process.chdir()`
  
  修改当前工作目录。参数为要一个路径。

### 4. 环境变量

`Node`允许通过`process.env`变量来访问`shell`环境变量

### 5. 退出

让一个应用退出，可以使用`process.exit`。

### 6. 信号

信号是进程和操作系统进行通信的方式之一。  
`Node`程序是通过`process`对象上以事件分发的形式来发送信号的。

### 7. `ANSI`转义

要在文本终端下控制格式、颜色以及其他输出选项，可以使用`ANSI`转义码。  


```JS
console.log('\033[90m' + data.replace(/(.*)/g,' $1') + '\033[39m');

//  \033 : 表示转义序列的开始。  
//  [  : 表示开始颜色设置。  
//  90 : 表示前景色为亮灰色。  
//  m  : 表示颜色设置结束。 
//  39 : 表示将颜色变为原来的颜色
```
### 8. 监视

`Node`允许监视文件或目录是否发生变化。  
监视意味着当文件系统中文件(或则目录)发生变化时，会分发一个事件，然后触发指定的回调函数。  

```JS
//监视'.css'文件变化的例子
const fs = require("fs");
//获取工作目录下所有的文件
let files = fs.readdirSync(process.cwd());
files.forEach(function(file){
    //监听'.css'后缀的文件
    if(/\.css/.test(file)){
        fs.watchFile(process.cwd() + "/" + file,function(){
            console.log(" - " + file + " chang");
        })
    }
})
//除了 fs.watchFile 之外，还可以使用 fs.watch 来监视整个目录。
```



## 二 、 `TCP`

## 三 、`HTTP` 