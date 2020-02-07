// 回调函数:将后续的处理逻辑传入到当前要做的事情中,当前事情结束后调用执行回调函数; 

function cookie(callback) {
    setTimeout(() => {
        let food = '炒饭';   //执行完这个异步操作,在调用回调
        callback(food);
    }, 1000)
}

function eat(val) {
    console.log(`吃${val}`);

}
cookie(eat); 