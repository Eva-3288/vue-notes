<template>
    <div>
        <mHeader>列表页</mHeader>
        <div class="content">
            <ul>
                <li v-for="(item,index) in lists" :key="index">
                    <img :src="item.img" alt="">
                    <div>
                        <p class="name">{{item.name}}</p>
                        <p class="info">{{item.info}}</p>
                        <p class="price">￥{{item.price}}</p>
                        <button class="delBtn" @click = 'del(item.id)'>删 除</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>   
import mHeader from '../components/mHeader'; 
import {bookLists,removeBook} from '../api';
    export default {
        name:'add',
        data(){
            return {
                lists:[]
            }
        },
        components:{
            mHeader,
        },
        created(){
            this.initLists();
        },
        methods:{
            async initLists(){
                this.lists = await bookLists();
            },
             async del(id){
                await removeBook(id);   //删除数据返回的空对象，所以不用接收返回值, 调用这个接口删除了后台数据了
                //还要删除前台显示的数据
                this.lists = this.lists.filter(item=>item.id !== id);
                // this.initLists();    //或者重新获取数据也可以
             }

        }
    }
</script>
<style lang="less" scoped>
@import '../assets/css/base.less';
.content{
    font-size:14px;
    ul{
        width:90%;
    margin:10px auto;
        li{
            display:flex;
            padding:10px;
            border-bottom:1px solid #ccc;
            img{
                width:120px;
                margin-right:10px;
            }
            .name{
                font-weight:600;
                color:#666;
            }
            .info{
                font-size:12px;
                padding:5px 0;
                color:#999;
            }
            .price{
                color:@baseColor;
            }
            .delBtn{
                border:none;
                background:@baseColor;
                color:#fff;
                margin-top:5px;
                width:54px;
                height:28px;
                border-radius:5px;
                font-size:12px;
                outline:none;
            }
        }
    }
}
</style>