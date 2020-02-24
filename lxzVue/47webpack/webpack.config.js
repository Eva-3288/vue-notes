let path = require('path');
// path.resolve('./dist');  //以当前路径解析出一个绝对路径
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/main.js',    
    output:{
        filename:'bundle.js',   
        path:path.resolve('./dist'), 
    },
    // 模块的解析规则
    module:{
        rules:[
           {             // js: 匹配除node_module以外的所有.js后缀的文件，用babel-loader进行转译，转成es5;
            test:/\.js$/,   //用正则匹配,/\.js$/以.js结尾的，exclude排除掉xx
            use:'babel-loader',
            exclude:/node_modules/,    //匹配所有.js,用babel-loader转译，排除掉node_modules
        },{
            test:/\.css$/,
            use:['style-loader','css-loader'],    // 这里数组里要 从右往左写，先在右边写css-loader,然后写左边style-loader
        },{
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader'],    // 这里数组里要 从右往左写，先在右边写css-loader,然后写左边style-loader
        },{
            test:/\.(jpg|png|gif|svg)$/,
            use:['url-loader?limit=8192'],    // 图片会给转成base64,我们可以限制8k(8*1024=8192字节)一下的转base64，其他情况下输出图片
        },{
            test:/\.vue$/,
            use:['vue-loader'],   //vue会自动的调用vue-template-compiler,就不用配vue-template-compiler了
        }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({   //以自己的html为模板，将打包后的结果 自动引入到html中，产出到dist目录下  
            template:'./src/index.html',   //使用的模板：自己定义的模板
            filename:'login.html'    //产出的文件的名字：可以修改输出到dist下的html的文件名
        }),
    ]
    
}
