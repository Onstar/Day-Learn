[TOC]

# `Git`学习---廖雪峰网站

## `Git`简介

### 一、安装

去官网下载对应的`Git`。  
安装完成后，打开`Git Bash`,然后进行设置：  

```Git
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```
`git config` 命令的 `--global`参数，用了这个参数，表示这台机器上所有的`Git`仓库都会使用这个配置，  
也可以对某个仓库指定不同的用户名和`Email`地址。  

### 二、创建版本库(`repository`)

1. 选一个合适的地方，创建一个空目录：  

```
mkdir learngit
cd learngit
pwd
/User/michael/learngit
```
`pwd` 命令用于显示当前目录。如例所示，该仓库位于`/User/michael/learngit`.  
*如果是 windows 系统，为避免一些问题，确保目录(包括父目录)不包含中文。*

2. 通过`git init` 命令把这个目录变成`Git`可以管理的仓库：

```
//接上面的代码块
//在learngit目录下
git init

//创建成功后，会出现一个`.git`目录，这个目录是`Git`用来跟踪管理版本库的。  
//`.git`目录默认是隐藏的。可以用命令`ls -ah`打印出来
```

3. 添加文件到`Git`仓库

 * 第一步，使用`git add <file>`,注意，可反复使用，添加多个文件；
 * 第二部，使用`git commit`命令。

```
//假设已经创建了一个 readme.txt 文件，并且里面有了一定内容。
git add readme.txt
git commit -m "wrote a readme file"

// -m 后面输入的是对本次提交的说明，可以输入任何内容，建议是有意义的，方便从历史记录里查找，也方便别人阅读。  
```