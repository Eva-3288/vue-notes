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

    let {pathname,query} = url.parse(req.url,true);    //url.parse()可以将一个完整的URL地址，分为很多部分并放在一个对象里，常用的有：host、port、pathname、path、query  
    //url.parse(req.url,true); 默认第二个参数是false,query返回的是 id=11&name=ll ;第二个参数是true的话，true把query转化成对象，query返回的是对象
    if(pathname === '/sliders'){
        res.setHeader('Content-type','application/json;charset=utf-8');  //编码格式，可不写
        return res.end(JSON.stringify(sliders));   //响应的时候返回字符串格式数据,一定要写return  跳出
    }

    if(pathname === '/hot'){
        read(function(books){
            let hot = books.reverse().slice(0,6);    //slice(0，6)包前不包后，留下的是0-5
            res.setHeader('Content-type','application/json;charset=utf-8');
            res.end(JSON.stringify(hot));
        })
        return;
    }
    if(pathname == '/book'){
        //静态接口，不是真的，真的数据是在数据库里
        // RESTful风格就是把同个功能的操作放在一起了，取的时候  路径?id=1
        let id = parseInt(query.id);  //取出来的是字符串--请求的数据的id 
        switch(req.method){    //判断请求的方法
            case 'GET':
                if(id){  //查询一个


                }else{
                    //获取所有图书
                    read(function(books){
                        res.setHeader('Content-type','application/json;charset=utf-8');
                        res.end(JSON.stringify(books.reverse()))
                    })
                }
                break;
            case 'POST':
                break;
            case 'PUT': 
                break;
            case 'DELETE':
                break;
        }
        return
    }
}).listen(3000);   //默认端口8080，但8080用来跑前端服务了，所以这里后端的端口要换一个