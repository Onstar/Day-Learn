[TOC]

# gulp
  [官网](http://www.gulpjs.com)
  [中文网](http://www.gulpjs.com.cn)

- 前端自动化构建工具
  `js`压缩,`var x`,`xname`，混淆
  合并.
  `css`压缩
  `html`压压缩

- `grunt` ,`webpack`...


## 核心就5个方法
  - task,gulp中是一个个任务的形式来实现功能。
    + task('任务名',function(){
      .....
    });
  - src
    + src('./*.js')
  - dest('./minjs/')// 指定处理后的文件的输出路径.
  - watch('./*.js',['任务名1','任务名2']);
  - run('任务名');//执行指定的任务.

## `gulp`的安装
  - 使用npm 进行安装
  - `npm install gulp-cli -g`;
  - `npm i -g gulp-cli`;

## `gulp` 使用

### 使用时还需要在项目中通过`npm`非全局安装`gulp`
  - `npm install gulp --save-dev`


### 还需要在当前项目根目录添加一个`gulpfile.js`文件来写具体的任务代码.

## `gulp`的一些插件
  - 也是使用`npm`安装
  - 对`js`代码进行压缩 gulp-uglify
   .pipe(uglify())
  - 对代码进行合并 gulp-concat
    .pipe(concat('all.js'))
    .pipe(concat('all.css'))
  - 对css进行压缩 gulp-cssnano
   .pipe(cssnano())
  - 对html进行压缩 gulp-htmlmin
   .pipe(htmlmin({collapseWhitespace:true,minifyJS:false,minifyCSS:true}))