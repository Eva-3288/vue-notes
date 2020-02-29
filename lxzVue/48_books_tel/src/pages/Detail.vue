<template>
    <div class='detail'>
        <!-- {{$route.params.bookid}} 一般我们不在页面写这么长的，可以在计算属性里计算一下-->
        {{id}}
    </div>
</template>
<script>    
    export default {
        name:'add',
        computed:{
            id(){
                return this.$route.params.bookid;   //将路径参数的id映射到bookid上
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