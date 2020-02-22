let path = require('path');
// path.resolve('./dist');  //以当前路径解析出一个绝对路径

module.exports = {
    entry:{   //多文件打包,入口文件放在对象里
        main1:'./src/main1.js',
        main2:'./src/main2.js'
    },    
    output:{
        filename:'[name].js',   //出口的文件,[name]会自动匹配对象里的key的名字,也可以这样写 filename:'[name]-bundle.js', 
        path:path.resolve('./dist'), 
    }
}