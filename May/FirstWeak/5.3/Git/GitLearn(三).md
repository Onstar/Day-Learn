[TOC]

# `Git`学习 -- 廖雪峰网站

## 远程仓库

`Git`是分布式版本控制系统。  
远程仓库是`Git`杀手级功能之一。  

### 添加到远程仓库

**想让本地仓库和远程仓库之间能够进行传输，需要两步**

由于`Git`仓库和`GitHub`仓库之间的传输是通过`SSH`加密的，所以要进行设置： 

1. 第一步：创建`SSH Key`.  

```
//首先在用户主目录下，看有没有`.ssh`目录，如果有，  
//再看有没有`id_rsa`和`id_rsa.pub`这两个文件，如果有，跳到第二步。  
//怎么找用户主目录，在`gitBash`命令窗口，输入 `cd ~`命令就可以跳转到用户主目录。  
//`cd ~/.ssh` ，如果有`.ssh`文件，就会直接进入。然后输入`ls`命令，查看该文件夹下的文件。  

//如果没有上面说的文件，则，创建： 
ssh-keygen -t rsa -C "youreamail@example.com"
//最后的参数是一个邮箱地址。
//运行该命令后，一路回车，使用默认值即可，无需设置密码(根据个人需求)。
```

2. 第二步：登录`Github`账号，在设置页面找到`SSH and GPG keys`  

![`Github`配置`SSH Key(一)`](https://raw.githubusercontent.com/Onstar/Images/master/Git/Github配置SSH(一).png)
![`Github`配置`SSH Key(二)`](https://raw.githubusercontent.com/Onstar/Images/master/Git/Github配置SSH(二).png)

*以上步骤完成后，这台电脑就和远程仓库建立了联系*  
*每台电脑操作完一次以后，之后就不要再次这样的操作了*  
*这样设置后，使得以后本地仓库和远程仓库能够进行同步*

为什么`GitHub`需要`SSH Key`呢？  
因为`GitHub`需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而`Git`支持`SSH`协议，所以，`GitHub`只要知道了你的公钥，就可以确认只有你自己才能推送。  

当然，`GitHub`允许你添加多个`Key`。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的`Key`都添加到`GitHub`，就可以在每台电脑上往`GitHub`推送了。  

最后友情提示，在`GitHub`上免费托管的`Git`仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。  

如果你不想让别人看到`Git`库，有两个办法，一个是交点保护费，让`GitHub`把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。另一个办法是自己动手，搭一个`Git`服务器，因为是你自己的`Git`服务器，所以别人也是看不见的。  

**想让本地的Git仓库和远程仓库能够进行同步，需要下面的步骤**

3. 第三步：在`Github`上创建一个仓库，仓库名为`learngit`。  

注释：这里远程仓库的名字为`learngit`是因为之前例子中在本地的创建的仓库名也是这个。  
另外，廖雪峰网站中的教程也是这个命名。    
不知道是不是要求本地仓库和远程仓库必须同名，但是，为了减少初期出现不必要的问题，所以写成同名。

填写完仓库名后，其他的保持默认，直接点击`Creat repository`按钮。  
这样就创建出了一个空仓库，可以把这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联。  

```
//把本地仓库和远程仓库进行关联
//在你本地仓库的目录下打开GitBash，然后输入下面的命令
git remote add origin git@github.com:Onstar/learngit.git
//远程库的名字就是origin，这是Git默认的叫法，也可以改成别的，但是origin这个名字一看就知道是远程库。
```

4. 第四步：本地仓库和远程仓库关联成功后，就可以把本地仓库的内容推送到远程上：  

```
git push -u origin master

//把本地库的内容推送到远程，用git push命令，实际上是把当前分支master推送到远程。

//由于远程库是空的，我们第一次推送master分支时，加上了-u参数，  
//Git不但会把本地的master分支内容推送的远程新的master分支，  
//还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

//在这第一次推送成功后，本地做了提交，就可以通过下面的命令：
git push origin master
//将本地 master 分支的最新修改推送至 Github 。
```

`SSH`警告

![`SSH`警告](https://raw.githubusercontent.com/Onstar/Images/master/Git/SSH警告.png)


### 从远程仓库克隆

从远程仓库克隆是第二种实现本地仓库和远程仓库进行关联的方式。

**实现步骤**

1. 创建一个仓库  

![创建仓库](https://raw.githubusercontent.com/Onstar/Images/master/Git/创建一个仓库.png)

勾选`Initialize this repository with a README`，这样`GitHub`会自动为我们创建一个`README.md`文件。创建完毕后，可以看到`README.md`文件

2. 使用`git clone`命令克隆一个本地仓库

```
git clone git@github.com:Onstar/gitsklls.git
//这样就克隆了一个本地仓库出来
```

### 注意

`GitHub`给出的地址不止一个，还可以使用`git remote add origin https://github.com/Onstar/test.git` 。  
那么，他和这个地址 `git remote add git@github.com:Onstar/test.git` 的区别是什么呢？  

`Git`支持多种协议，默认的`git://`使用`ssh`，但也可以使用`https`等其他协议。  

使用`https`除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放`http`端口的公司内部就无法使用`ssh`协议而只能用`https`。  

前一地址是使用 `https` 协议进行链接的，后者是用`SSH`协议进行链接的。