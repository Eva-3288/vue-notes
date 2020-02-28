// 引入node模块
let http = require('http');   
let url = require('url');
let path = require('path');
console.log(process.cwd());



console.log();

let fs = require('fs');   //文件读写 
function read(cb){   //fs.read是异步的，cb是回调
    // fs.readFile(path.join(__dirname,"./book.json"),'utf8',function(err,data){
    fs.readFile(path.resolve(__dirname,"./book.json"),'utf8',function(err,data){    //fs.read是异步的， 第三个参数是读取完执行的回调，err 和data 是失败和成功返回的信息
        // 注意：第一个参数要写文件的绝对路径
        console.log(err);
        console.log(data);
        
        
        if(err || data.length == 0){
            cb([]);
        }else{
            cb(JSON.parse(data));    //JSON.parse(data)  将读出来的字符串转成对象
        }

    })
}

//获取轮播图接口   '/sliders'
let sliders = require('./sliders-data')
http.createServer((req,res)=>{       //创建服务,两个参数，请求和响应

    // --解决跨域问题--跨域头 开始  端口8080  调3000的接口 会跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
     // --解决跨域问题--跨域头 结束

    let {pathname,query} = url.parse(req.url);    //url.parse()可以将一个完整的URL地址，分为很多部分并放在一个对象里，常用的有：host、port、pathname、path、query  
    if(pathname === '/sliders'){
        res.setHeader('Content-type','application/json;charset=utf-8');  //编码格式，可不写
        return res.end(JSON.stringify(sliders));   //响应的时候返回字符串格式数据,一定要写return  跳出
    }

    if(pathname === '/hot'){
        read(function(books){
            let hot = books.reverse().slice(0,3);    //slice(0，6)包前不包后，留下的是0-5
            res.setHeader('Content-type','application/json;charset=utf-8');
            res.end(JSON.stringify(hot));
        })
        return;
    }
}).listen(3000);   //默认端口8080，但8080用来跑前端服务了，所以这里后端的端口要换一个