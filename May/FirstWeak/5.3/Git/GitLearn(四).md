[TOC]

# `Git`学习 -- 廖雪峰网站

## 分支管理

### 一、创建与合并分支

在`Git`里，有个分支叫主分支，即`master`分支。`HEAD`严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD`指向的就是当前分支。  

一开始的时候，`master`分支是一条线，`Git`用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点：

![主分支](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(一).png)

创建一个新的分支，例如`dev`时，`Git`创建了一个指针叫`dev`,指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上：  

![创建分支图](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(二).png)

`Git`创建一个分支很快，因为除了增加一个`dev`指针，改改`HEAD`的指向，工作区的文件都没有任何变化！

不过，从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变：  

![分支提交图](https://raw.githubusercontent.com/Onstar/Images/master/Git/%E5%88%86%E6%94%AF(%E4%B8%89).png)

假如我们在`dev`上的工作完成了，就可以把`dev`合并到`master`上。`Git`怎么合并呢？最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了合并：  

![分支合并图](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(四).png)

合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支：  

![删除分支图](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(五).png)

### 代码示例

1. 创建`dev`分支，并切换到分支上：  

```Git
git checkout -b dev
//`git checkout`命令加上`-b`表示创建并切换，相当于下面两条命令： 
git branch dev
git checkout dev

//查看当前分支:
git branch
//该命令会列出所有分支，当前分支前有一个`*`号
```

2. 切换到分支后，对某个文件进修改(假如是`readme.txt`文件加了一条数据)  ，然后提交

```
git add readme.txt
git commit -m "branch test"
```

3. `dev`分支工作完成后，切换到`master`分支上：  

```
git checkout master
```

切换回`maste`分支后，再查看一个`readme.txt`文件，刚才添加的内容不见了！因为那个提交是在`dev`分支上，而`master`分支此刻的提交点并没有变：  

![切换回`master`分支后](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(六).png)

4. 把`dev`分支上的工作合并到`master`分支上：  

```
git merge dev

//`git merge` 命令用于合并指定分支到当前分支。
```

5. 如果`dev`分支没有用了，就可以删除`dev`分支

```
git branch -d dev
```

### 分支命令总结

1. 查看分支： `git branch`
2. 创建分支： `git branch <name>`
3. 切换分支： `git checkout <name>`
4. 创建+切换分支： `git checkout -b <name>`
5. 合并某分支到当前分支： `git merge <name>`
6. 删除分支： `git branch -d <name>`

## 二、解决冲突

代码示例：  

1. 创建一个新的分支`feature1`,并切换到该分支。  

```
git checkout -b feature1
```

2. 在分支`feature1`上，对文件`readme.txt`最后一行修改后，进行提交

```
git add readme.txt
git commit -m "AND simple"
```

3. 切换到`master`分支

```
git checkout master
```

4. 在`master`分支上，也对最后一行修改，然后提交  

```
git add readme.txt
git commit -m "& simple"
```

现在，`master`分支和`feature1`分支各自都分别有新的提交，变成了这样：  

![现在分支图](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(七).png)

5. 进行分支合并

```
git merge feature1
//出现合并冲突的提示
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.

```
`Git`告诉我们，`readme.txt`文件存在冲突，**必须手动解决冲突后再提交**。`git status`也可以告诉我们冲突的文件.

6. 手动修改后，再次提交

```
git add readme.txt
git commit -m "conflict fixed"
```
现在，`master`分支和`feature1`分支变成了下图所示：  
![分支冲突解决后](https://raw.githubusercontent.com/Onstar/Images/master/Git/分支(八).png)

用带参数的`git log`也可以看到分支的合并情况：  

```
git log --graph --pretty=oneline --abbrev-commit
```

`git log -- graph`命令可以查看分支合并图。上面的那种带参数查看会看起来更简洁一点。

7. 删除分支

```
git branch -d feature1
```

## 三、分支管理策略

通常，合并分支时，如果可能，`Git`会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用`Fast forward`模式，`Git`就会在`merge`时生成一个新的`commit`，这样，从分支历史上就可以看出分支信息。

代码示例：  

```
//1. 创建并切换分支
git checkout -b dev
//2. 对`readme.txt`文件修改后，提交
git add readme.txt
git commit -m "add merge"
//3. 切回到`master`分支
git checkout master
//4. 准备合并`dev`分支,`--no--ff`表示禁用`Fast forward`：
git merge --no--ff -m "merge with no--ff" dev
//因为禁用`Fast forward`合并时，会创建一个新的`commit`，所以要加上`-m`参数，把描述写进去。  
//5. 使用 `git log` 查看分支历史：
git log --graph --pretty=oneline --abbrev-commit
```

分支策略：  
1. `master`分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

2. 干活都在`dev`分支上，也就是说，`dev`分支是不稳定的，到某个时候，比如`1.0`版本发布时，再把`dev`分支合并到`master`上，在`master`分支发布`1.0`版本

## 四、`Bug`分支

在工作的时候，突然要去修改一个`Bug`，但是目前在`dev`分支上的工作还没有提交，因为还没有完成，  
所以没法提交，又必须马上去修改`Bug`,这时候该如何去处理？  

**解决方案：**

1. `Git`提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：

```
git stash
//运行该命令后，用 `git status`查看工作区，是干净的。即，此时回到了上一次提交后的状态。   
//之前修改的，被储藏起来了。
```

2. 步骤二：然后确定要在哪个分支上修改`Bug`。假设在`master`分支上，就从`master`上创建一个分支：  

```
//1. 回到`master`分支上
git checkout master
//2. 创建一个分支`issue-101`
git checkout -b issue-101
//3. 假设修改完了`bug`，然后就提交
git add readme.txt
git commit -m "fix bug 101"
//4. 回到`master`分支，进行合并，然后删除`issue-101`分支
git checkout master
git merge --no-ff -m "merged bug fix 101" issue-101
git branch -d issue-101
```

3. 步骤三：`Bug`改完了，继续回到`dev`分支干活

```
//1. 回到`dev`分支
git checkout dev

//2. 但是现在工作区是干净的，之前的工作现场保存到哪了？可以用`git stash list`命令查看  
git stash list

//3. 工作现场恢复到工作区，有两个办法：
//3.1 使用 `git stash apply`,恢复后，`stash`内容并不删除，需要使用`git stash drop`来删除
//3.2 使用 `git stash pop`, 恢复的同时也把`stassh`内容删除
git stassh pop

//4. 使用 `git stash list` 查看
git stassh list

//注意：可以多次使用`git stash`保存工作现场，恢复的时候，  
//先用`git stash list`查看，然后恢复指定的`stash`，用命令：  
git stash apply stash@{0}
//stash@{0} 只是某个`stash`的标识
//最后，删除
git stash drop stash@{0}
```

## `Feature`分支

当要添加一个新的功能时，为了不把主分支搞乱，所以，每添加一个新的功能，就新建一个新的`feature`分支，  
在这条分支上完成工作后，进行合并，然后删除该`feature`分支。

## 多人协作

当你从远程仓库克隆时，实际上`Git`自动把本地的`master`分支和远程的`master`分支对应起来了，并且，远程仓库的默认名称是`origin`。

要查看远程库的信息，用`git remote`.     

或者，用`git remote -v`显示更详细的信息.  

1. 推送分支  
推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，`Git`就会把该分支推送到远程库对应的远程分支上：

`git push origin master`
如果要推送其他分支，比如`dev`，就改成：   
`$ git push origin dev`

2. 但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？

  * `master`分支是主分支，因此要时刻与远程同步；

  * `dev`分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；

  * `bug`分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；

  * `feature`分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。

  3. 当另外一个人又向`dev`分支推送了新的内容，你这边修改提交后(假设和那个那人修改同一个文件)，也要推送，  
  会发现推送失败，这是因为修改的是同一个文件，产生了冲突，需要你把最新的`pull`下拉，解决冲突后再推送。  
  然后使用`git pull`命令时，操作还是失败，提示说没有指定需要`pull`的分支，这时，可以使用`git pull origin dev`命令；     
  或者先设置本地`dev`分支和远程`dev`分支的联系，`git branch --set-upstream-to=origin/dev dev`，然后在使用，  
  `git pull`命令。