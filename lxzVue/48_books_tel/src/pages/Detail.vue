<template>
    <div class='detail'>
        <mHeader :back='true'>修改信息</mHeader>
        <!-- {{$route.params.bookid}} 一般我们不在页面写这么长的，可以在计算属性里计算一下-->
        <ul class="box">
            <li>
                <!-- <img :src="bookData.img"> -->
                <img v-lazy="bookData.img">
            </li>
           <li>
               <label for="name">图书名称</label>
               <input type="text" id="name" v-model="bookData.name">
           </li>
            <li>
               <label for="info">图书信息</label>
               <input type="text" id="info" v-model="bookData.info">
           </li>
           <li>
               <label for="price">图书价格</label>
               <input type="text" id="price" v-model="bookData.price">
           </li>
           <li>
               <button @click='update'>确认修改</button>
           </li>
        </ul>
        
    </div>
</template>
<script>    
    import mHeader from '../components/mHeader';
    import {findBook,changeBook} from '../api';
    export default {
        name:'add',
        data(){
            return {
                bookData:{}
            }
        },
        components:{
            mHeader,
        },
        watch:{
            $route(){    //监听路径变化，路径一变就重新获取数据
                this.initDetail();   
            }
        },
        created(){   //页面一加载，根据id 发送请求
            this.initDetail();
        },
        computed:{
            id(){
                return this.$route.params.bookid;   //将路径参数的id映射到bookid上
            }
        },
        methods:{
            async initDetail(){
                this.bookData = await findBook(this.id);
                // JSON.stringify(this.bookData)  === '{}'    //判断返回的是空对象
                Object.keys(this.bookData).length > 0 ? void 0 : this.$router.push('/lists')     
                // 对象转数组  Object.keys(对象) 会把这个对象的key 转换成数组
            },
            async update(){  //修改图书信息
                await changeBook(this.id,this.bookData);   //await 如果不成功一直卡在这，结束了才往下走
                this.$router.push(' /lists');  //修改完成后跳转页面
            }
        }
        
    }
</script>
<style lang="less" scoped>
@import '../assets/css/base.less';
.detail{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: #fff ;
    z-index:100;
    ul{
        margin-top:40px;
         li{
             &:nth-child(1){
                 padding:35px 20px;
                 text-align: center;
                // background: blue;
                img{
                    width:50%;
                    // border:1px solid #999;
                }
             }
             padding: 5px 20px;
             label{
                 display: block;
                 font-size:18px;
                 margin-bottom:10px;
             }
             input{
                 border:1px solid #ccc;
                 height:30px;
                 padding:0 5px;
                 width:80%;
                 margin-left:30px;
             }
             &:last-child{
                 text-align: center;
                 margin-top:20px;
             }
             button{
                 border:none;
                background:@baseColor;
                color:#fff;
                margin-top:5px;
                width:150px;
                height:35px;
                border-radius:5px;
                font-size:14px;
                outline:none;
             }
        }
    }

}
</style>