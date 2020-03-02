// 引入node模块
let http = require('http');   
let url = require('url');
let path = require('path');

let fs = require('fs');   //文件读写 
function read(cb){   //fs.read是异步的，cb是回调
    // fs.readFile(path.join(__dirname,"./book.json"),'utf8',function(err,data){
    fs.readFile(path.resolve(__dirname,"./book.json"),'utf8',function(err,data){    //fs.read是异步的， 第三个参数是读取完执行的回调，err 和data 是失败和成功返回的信息
        // 注意：第一个参数要写文件的绝对路径

        if(err || data.length == 0){
            cb([]);
        }else{
            cb(JSON.parse(data));    //JSON.parse(data)  将读出来的字符串转成对象
        }

    })
}
function write(data,cb){   //写入内容
    fs.writeFile(path.join(__dirname,'./book.json'),JSON.stringify(data),cb)
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
    
    //加载更多
    let pageSize = 5;  //每次请求显示5个
    if(pathname === '/page'){
        let offset = parseInt(query.offset) || 0;   //拿到前端传递的值
        
        read(function(books){
            let result = books.reverse().slice(offset,offset+pageSize);   //每次在偏移的基础上增加5条
            let hasMore = true;  //默认有更多
            if(books.length <= offset+pageSize){
                hasMore = false;
            }
            res.setHeader('Content-type','application/json;charset=utf-8');
            setTimeout(()=>{   //模仿异步返回很慢，2s后返回
                res.end(JSON.stringify({hasMore,books:result}))
            },1000)
        });
        return;
    }

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
                if(!isNaN(id)){  //查询一个  ,如果写if(id)  那id=0的时候，是查询一个，但把0转为false了，查了所有了
                    read(function(books){
                        let book = books.find(item=> {
                            return item.id === id;
                        })
                        if(!book) book ={};
                        res.setHeader('Content-type','application/json;charset=utf-8');
                        res.end(JSON.stringify(book));
                    })
                }else{
                    //获取所有图书
                    read(function(books){
                        res.setHeader('Content-type','application/json;charset=utf-8');
                        res.end(JSON.stringify(books.reverse()))
                    })
                }
                break;
            case 'POST':
                let str = '';
                req.on('data',chunk=>{
                    str += chunk;
                })
                req.on('end',()=>{
                    let book = JSON.parse(str);   
                    read(function(books){    //读取数据
                        book.id = books.length ? books[books.length-1].id+1 : 1;
                        books.push(book);
                         //现在书改好了，但是是放在内存中，还要用write方法写到数据里
                        write(books,function(){   //将数据写回json中
                            res.end(JSON.stringify(book));  //这个返回的结果实际不会用到
                        })
                    })
                })
                break;
            case 'PUT': 
                if(id){   //获取了当前要修改的id
                    //请求体是个流,先把他转成字符串
                    let str = '';
                    req.on('data',chunk=>{
                        str += chunk;
                    })
                    req.on('end',()=>{
                        let book = JSON.parse(str);   //将字符串改成对象，这里的book 就是修改后的数据
                        read(function(books){    //读取数据
                            books = books.map(item=>{
                                if(item.id === id){   //找到要修改的项，改成book--上面获取到的请求体里的数据
                                    return book;
                                }
                                return item;   //其他不需要改的返回当前想，如果不返回，就变成undefined了
                            })

                             //现在书改好了，但是是放在内存中，还要用write方法写到数据里
                            write(books,function(){   //将数据写回json中
                                res.end(JSON.stringify(book));  //这个返回的结果实际不会用到
                            })
                        })
                       
                    })
                }
                break;
            case 'DELETE':
                read(function(books){
                    books = books.filter((item,index)=>{   //过滤去掉被删除的那项，   操作完后放在books里时放在内存中了，
                        console.log(item.id,id)
                        return item.id !== id;
                    })
                    console.log(books);
                    
                    write(books,function(){
                        // 写入后的回调函数
                        console.log('成功写入');
                        res.end(JSON.stringify([]));   //删除返回空对象
                    })
                })
                break;
        }
        return
    }
}).listen(3000);   //默认端口8080，但8080用来跑前端服务了，所以这里后端的端口要换一个