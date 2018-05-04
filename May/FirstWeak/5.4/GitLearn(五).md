[TOC]

# `Git`学习 -- 廖雪峰网站

## 标签管理  

发布一个版本时，我们通常先在版本库中打一个标签（`tag`），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

`Git`的标签虽然是版本库的快照，但其实它就是指向某个`commit`的指针（跟分支很像对不对？但是分支可以移动，标签不能移动），所以，创建和删除标签都是瞬间完成的。

`Git`有`commit`，为什么还要引入`tag`？

“请把上周一的那个版本打包发布，`commit`号是6a5819e...”

“一串乱七八糟的数字不好找！”

如果换一个办法：

“请把上周一的那个版本打包发布，版本号是`v1.2`”

“好的，按照`tag v1.2`查找`commit`就行！”

所以，`tag`就是一个让人容易记住的有意义的名字，它跟某个`commit`绑在一起。

### 创建标签

1. 步骤一：切换到需要打标签的分支上：  

```
//例如切换到 `master` 分支上
git checkout master
```

2. 步骤二：使用命令 `git tag <name>`

```
git tag v1.0

//可以使用 `git tag` 命令查看所有标签。标签出现的顺序不是按时间排序的，而是按字母。  
git tag

//默认情况下，标签是打在最新提交的`commit`上的     
//如果发现前段时间的某个没有打上标签怎么办？  
//1. 方法是，找到历史提交的`commit id`.使用命令`git log`就可以查看。   
git log --pretty=oneline --abbrev-commit
//`git log` 命令后面的都是参数，可以不写，加上只是为了打印出的效果更简洁。  
//2. 找到`commit id`后，使用下面的命令
git tag -v0.9 62389
//62389 就是 `commit id`

//`git show <tagname>` 查看标签信息
git show v1.0
```

3. 创建带有说明的标签，用`-a`指定签名，`-m`指定说明文字：  

```
git tag -a v1.1 -m "version is add"  
git tag -a v1.q -m "version is add" 62389
//上面两种写法都是可以的

//使用 `git show <tagname>`可以看到说明文字
```

4. 还可以通过`-s`用私钥签名一个标签：  
签名采用`PGP`签名，因此，必须首先安装`gpg（GnuPG）`，如果没有找到`gpg`，或者没有`gpg`密钥对，就会报错：
```
git tag -s v1.q -m "version is add" 62389
```

## 操作标签

如果标签打错了，也可以删除：  

```
git tag -d v1.1
```

因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

如果要推送某个标签到远程，使用命令`git push origin <tagname>`：  

```
git push origin v1.0
```

或者，一次性推送全部尚未推送到远程的本地标签：

```
git push origin --tags
```

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：  

```
git tag -d v0.9
```

然后，从远程删除。删除命令也是`push`，但是格式如下：  

```
git push origin :refs/tags/v0.9
```

### 操作标签命令小结

1. 命令`git push origin <tagname>`可以推送一个本地标签；

2. 命令`git push origin --tags`可以推送全部未推送过的本地标签；

3. 命令`git tag -d <tagname>`可以删除一个本地标签；

4. 命令`git push origin :refs/tags/<tagname>`可以删除一个远程标签。