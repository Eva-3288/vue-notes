### 1. 下载webpack
- 在命令行里用，加-g是全局安装；
- 安装webpack 或者less 最好不要安装全局的，否则可能导致webpack的版本差异；最好是本地安装（局部安装）

```
npm init -y         //1. 初始化
npm install webpack --dev    //2. 安装webpack , 不要全局-g，有yarn的话 也可以yarn add webpack
//3.在项目的根路径下，建一个文件叫webpack.config.js
```
> webpack是一个包，会下载到module里去，我们的目的是用webpack里的某个文件去运行文件
- 开发的时候要打包文件，上线的时候就不用了，所有后面加--dev,说明是开发依赖，上线就不用了

> 但是我们运行webpack.js的时候，怎么找到webpack.config.js文件，因为他们在两个目录下?
> 
> 1. `node_modules` 下的 `.bin`文件夹下 的`.cmd `是我们真正执行的命令，webpack 执行的是`webpack.cmd` 命令，点开后里面的内容：`"%dp0%\..\webpack\bin\webpack.js"` 这是运行 其`上一级目录里的webpack\bin\webpack.js`,我们可以在package.json里配个脚本
```
@ECHO off
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\node.exe" (
SET "_prog=%dp0%\node.exe"
) ELSE (
SET "_prog=node"
SET PATHEXT=%PATHEXT:;.JS;=;%
)

"%_prog%"  "%dp0%\..\webpack\bin\webpack.js" %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b

```
2. 在package.json里配脚本：
```
"scripts": {
    "build":"webpack"
},
```
- 脚本用的命令是webpack,这样就会自动的去当前node_module下的.bin文件夹下找webpack.cmd，让其执行，执行的就是bin/webpack.js ，

- webpack.js需要当前目录下有个名字是webpack.config.js的文件

- 我们通过`npm run build`执行的目录是当前文件夹的目录，所以会去当前目录下查找

- 总结一点：**package.json  要和 webpack.config.js 在同级目录,然后在package.json里配置脚本**，这样package.json里运行脚本webpack的时候，就和webpack.config.js  同级了

3. 配完之后，`npm run build`

--------------------------------
模块可以相互依赖，webpack可以帮我们解析这种关系，我们写代码分为 源码 和 生成上的代码
- 我们把 `源码放在src文件夹`下，在这里面写
- `打包后的 放在dist文件夹`下,也就是生成上的代码，这个dist 不是自己建的

webpack 支持所有规范的写法；
