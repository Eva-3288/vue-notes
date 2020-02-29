<template>
    <div class='detail'>
        <mHeader :back='true'>详情页面</mHeader>
        <!-- {{$route.params.bookid}} 一般我们不在页面写这么长的，可以在计算属性里计算一下-->
        <div class="content">
            <img :src="bookData.img">
            <p>{{bookData.name}}</p>
        </div>
        
    </div>
</template>
<script>    
    import mHeader from '../components/mHeader';
    import {findBook} from '../api';
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
            }
        }
        
    }
</script>
<style lang="less" scoped>
.detail{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: #fff ;
    z-index:100;
}
</style>