/* 
1. promise 有3个状态:成功态,失败态,等待态
2. Promise 是一个定义好的原生自带的类(构造函数) ,给这个构造函数传一个参数(excutor-一个函数)
当我们new的时候会立即调用执行这个函数excutor(立即执行!立即执行!)
3. 默认是等待状态PENDING,立即执行后可能会变成成功态fulfilled,也可能会失败态rejected.
4. 至于什么时候成功或什么时候失败,取决于我们,如果我们调用函数resolve()表示成功了(转向成功态),如果我们调用reject()表示失败了(转向失败态)
5. resolve() 和 reject() 这两个函数也是promise给提供的,是excutor执行器的形参
6. 一旦成功了就不会再失败,失败了就不会再成功

7. promise实例都有一个 then 方法,then方法有两个参数(函数):如果我们再excutor里掉resolve,就执行then里的第一个方法,掉reject就执行then里的第二个方法;
  ==>也就是说:resolve 就是then里的第一个函数,reject 就是then里的第二个函数 
  ==>所以:resolve() 就是then里第一个函数执行,reject()执行就是then里第二个函数执行
  ==>resolve(a)执行时里面的参数(实参-这是在调用),就是then里第一个函数里的形参(其实这是在定义函数,定义resolve)

  这样的好处就是:不用我们自己传callback了,callback 定义写在then里
8.总结:
    我们在new Promise的执行器里,执行逻辑(当前要做的事),可以在我们需要的时候掉成功方法resolve() 或 失败方法reject(),其实这个方法和我们之前写的callback 类似
    而成功或失败后走的逻辑,我们在then里定义

*/
/* let p = new Promise( (resolve,reject)=>{   //new后返回一个实例, 立即执行函数里有2个参数,分别在成功是调用/失败时调用
    setTimeout(()=>{   //类似一个异步
        let food ='炒饭';   //1s后执行这句,执行完后执行回调resolve()
        resolve(food);  //执行参数的时候传参
    },1000)   
})   

p.then(data=>{      
    console.log(data);   
},err=>{

}) */

// ------------------------------------------------
// ajax 四部曲
function ajax({url='',type='get',dataType='json'}){   //ajax 传一个参数,对象
    return new Promise( (resolve,reject)=>{
        let xhr = new XMLHttpRequest();  //1 创建xhr对象
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload = function(){
            //只要onload了,相当于xhr.readState == 4了
            if(xhr.status ==200){
                resolve(xhr.response)
            }else{
                reject('错误')
            }
        }
        xhr.onerror = function(err){
            reject(err)
        }
        xhr.send(); 
    })
}
// ajax({url:'./carts.json'}).then((data)=>{
//     console.log(data);
    
// },(err)=>{

// }) 

//--------------------------------------------
/* 现在ajax已经过时了,跟高级的是fetch;fetch的用法完全基于promise的

以后还有更高级的 async await  这是异步的终极解决方案
Async/Await 是ES7的语法,专门解决异步问题,让异步代码变起来更像同步的,基于promise 和es6
*/