<template>
    <div>
        <mHeader :back='false'>首页</mHeader>
        <div class="content">
            <swiper :swiperSlides='sliders'></swiper>
            <div class="hotBox">
                <h3>热门图书</h3>
                <ul class="hotBooks">
                    <li v-for="(item,index) in hots" :key="index">
                        <img :src="item.img" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>    
import mHeader from '../components/mHeader';
import swiper from '../components/swiper';
import {getSliders,getHot} from '../api'

    export default {
        name:'add',
        data(){
            return {
                sliders:[],
                hots:[],
            }
        },
        components:{
            mHeader,
            swiper
        },
        // async created(){     //created里不要写太复杂的逻辑，我们放在methods里，然后再这里调用
        //     // 语法糖 async await  async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
        //    //await 后面只能跟promise实例
        //    let {data:myData} = await getSliders();      //1. 用到了对象的解构，2. data:myData 起别名,对象中的属性名必须和得到的数据对象中的属性名一直
        //    this.sliders = myData;
        // },
        created(){
            this.initSliders();
            this.initHot();
        },
        methods:{
            async initSliders(){
                // 语法糖 async await  async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
                //await 后面只能跟promise实例
                // let {data:myData} = await getSliders();      //1. 用到了对象的解构，2. data:myData 起别名,对象中的属性名必须和得到的数据对象中的属性名一直
                // this.sliders = myData;
                 this.sliders = await getSliders();
            },
            async initHot(){
                // let {data} = await getHot();
                // this.hots = data;
                this.hots = await getHot();   //用了axios拦截器处理的请求后返回的结果
            }
        }
    }
</script>
<style lang="less" scoped>
.hotBox{
    width:90%;
    margin:10px auto;
    h3{
        border-left:2px solid red;
        padding-left:10px;
    }
    .hotBooks{
        // background:red;
        display:flex;   //伸缩盒模型, 默认flex-direction:row; 横向的
        flex-wrap:wrap;  //默认不换行，wrap是换行
        li{
            width:30%;
            margin:5px 0;
            border: 1px solid #ccc;
            color:#666;
            padding:1%;
            font-size: 14px;
            margin-right:1%;
            &:nth-child(3n){
                margin-right:0;
                // background: red;
            }
            img{
            width:100%;
            }
        }
        
    }   
}

</style>