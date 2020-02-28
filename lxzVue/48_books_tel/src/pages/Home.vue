<template>
    <div>
        <mHeader title='首页' :back='true'></mHeader>
        <div class="content">
            <swiper :swiperSlides='sliders'></swiper>
        </div>
    </div>
</template>
<script>    
import mHeader from '../components/mHeader';
import swiper from '../components/swiper';
import {getSliders} from '../api'

    export default {
        name:'add',
        data(){
            return {
                sliders:[],
            }
        },
        components:{
            mHeader,
            swiper
        },
        async created(){
            // 语法糖 async await  async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成
           //await 后面只能跟promise实例
           let {data:myData} = await getSliders();      //1. 用到了对象的解构，2. data:myData 起别名,对象中的属性名必须和得到的数据对象中的属性名一直
           this.sliders = myData;
        }
    }
</script>