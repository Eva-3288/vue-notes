<template>
  <div id="tab">
   <router-link to="/home">
   <i class="iconfont icon-shouyeshouye"></i>
   <span>首页</span>
   </router-link>
   <router-link to="/lists">
   <i class="iconfont icon-weimingmingwenjianjia_liebiao"></i>
   <span>列表</span>
   </router-link>

   <router-link to="/add">
   <i class="iconfont icon-tianjia"></i>
   <span>添加</span>
   </router-link>
   <router-link to="/collect">
   <i class="iconfont icon-shoucang1"></i>
   <span>收藏</span>
   </router-link>
  </div>
</template>
<script>
import "../assets/font/iconfont.css"

export default {
  name: 'tab'
}
</script>
<style scope lang = "less">
@import '../assets/css/base.less';
#tab{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:80px;
    display:flex;
    background: #fff;
    border-top:1px solid #ccc;
    /* router-link渲染后就是a标签 */
    a{
        color:#666;
        display: flex;
        flex-direction:column;
        justify-content: center;
        flex:1;
        align-items:center;
        i{
            font-size:24px;
        }
    }
    a.router-link-active{
        color:red;
    }
}
</style>
