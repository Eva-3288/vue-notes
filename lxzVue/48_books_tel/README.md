
1. 安装vue-cli， 初始化项目
``` bash
npm install vue-cli -g
# 装完vue-cli后，命令行上就有一个vue的命令   vue-cli -V查看版本
# 安装vue-cli的作用：我们用它来创建一个项目 

vue init webpack  项目名称
# #用vue初始化一个带有webpack的项目，项目名是项目名称

npm install   
#安装依赖,在有package.json的文件夹下

npm  run dev
```
2. 项目中用到less
vue-cli生成的项目，没有less的安装包，但是内部包less配好了，安装less后就默认支持less了
```bash
npm install less less-loader axios vuex bootstrap 
```
3. 目录：
- pages --页面级组件
- components --  基础组件
- api -- 接口文件夹
----------------------

- mock -- 模拟数据，mock是模拟的意思，后台代码，不能放在src下
后台服务

4. 图标 iconfont - 图标字体
5. flex 布局
```css
display:flex;    //flex-伸缩盒模型
flex-direction:row/colum;   //默认方向是row 横向的,里面每一项有垂直排列了
justify-content:center;    // 垂直居中
align-item:center;   //横向居中
flex:1;   //每份占1
```
