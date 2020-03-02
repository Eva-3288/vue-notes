import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'    //设置默认的基本路径,增加默认的请求路径
axios.interceptors.response.use((res)=>{    //在这里统一拦截结果，把结果处理成res.data
    return res.data
})

//获取轮播图数据
export let getSliders = ()=>{
    return axios.get('/sliders');   //返回的是一个promise对象，可以then
};
//获取热门图书
export let getHot = ()=>{
    return axios.get('/hot');
}
//获取图书列表
export let bookLists = ()=>{
    return axios.get('/book');
}
//删除某一个图书
export let removeBook = (id)=>{
    return axios.delete(`/book?id=${id}`);    //delete通过路径传参   url?id=1
}
//查找某一个的详情
export let findBook =(id)=>{
    return axios.get(`/book?id=${id}`);
}
// 修改图书
export let changeBook = (id,data)=>{
    return axios.put(`/book?id=${id}`,data);
}
// 添加图书
export let addBook = (data)=>{
    return axios.post(`/book`,data);
}
// axios 是基于promise开发的，axios也有all方法
export let getHomeAll = ()=>{  
    return axios.all([getSliders(),getHot()]);   //当这两个方法都执行完后，返回一个promise对象
}
//加载更多-根据偏移量5  返回对应的数据5-10
export let getMore = (offset)=>{
    return axios.get('/page?offset='+offset);
}