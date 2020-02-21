//要在main.js里引入这两个变量，这里要先导出变量

export let str1 = '这是a.js里的变量1';
export let str2 = '这是a.js里的变量2';

/* 
    这些写的实现：会将str1 和 str2放到一个对象里导出,然后在main.js里引入
    {str1:'这是a.js里的变量1',str2:'这是a.js里的变量2'} 
*/

/* 
    node的commonjs规范的写法是：

    exports.str1 = str1;    
    exports.str2 = str2; 
    //最后导出exports对象

*/

// 导出方法/函数
export function a(){
    console.log('a方法');
}
//导出箭头函数
export let c = ()=>{
    console.log('c方法');
    
}