let path = require('path');
//peth是node的模块，用来处理路径的；最常用的方法是resolve()

path.resolve('./dist');  //以当前路径解析出一个绝对路径
console.log(path.resolve('./dist'));

//resolve是解析，给他一个相对路径，会返回一个绝对路径；

//webpack 必须采用commonjs的写法，不能用es6或其他的；
// 规定的是要导出一个模块module.exports = {}
module.exports = {
    entry:'./src.main.js',    
    //打包的入口文件，webpack会自动查找相关的依赖进行打包
    //在main.js里引了一些其他的js文件
    output:{
        filename:'bundle.js',   //打包后的名字
        path:path.resolve('./dist'), //必须是一个绝对路径,打包文件放的位置
        // c://xx/xx/index.js  这是绝对路径；  ./a/index.js  这是相对路径
    }
}