<template>
    <div>
        <mHeader>添加图书</mHeader>
        <ul class="box">
            <li>
                <label for="img">图书封面</label>
               <input type="text" id="img" v-model="bookData.img">
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
               <button @click='add'>添加</button>
           </li>
        </ul>
    </div>
</template>
<script>   
    import mHeader from '../components/mHeader'; 
    import {addBook} from '../api'
    export default {
        name:'add',
        data(){
            return {
                bookData:{}
            }
        },
        components:{
            mHeader
        },
        methods:{
            async add(){
                await addBook(this.bookData);
                this.$router.push('/lists');
            }
        }

    }
</script>
<style lang="less" scoped>
@import '../assets/css/base.less';
    ul{
        margin-top:40px;
         li{
            //  &:nth-child(1){
            //      padding:35px 20px;
            //      text-align: center;
            //     // background: blue;
            //     img{
            //         // border:1px solid #999;
            //     }
            //  }
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
</style>