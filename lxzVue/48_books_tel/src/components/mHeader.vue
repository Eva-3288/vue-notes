<template>
  <div id="header">
      <i class="iconfont icon-fanhui1" v-if='back' @click='goBack'></i>
      <slot></slot>
  </div>
</template>
<script>
import "../assets/font/iconfont.css"

export default {
  name: 'tab',
  data(){
      return {
         
      }
  },
  mounted(){
      console.log(this.back);
      
  },
//   props:['back'],
  props:{
      back:{
          type:Boolean,
          default:false,
      },
    //   title:{
    //       type:String,
    //       default:'333'
    //   }
  },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scope lang = "less">
@import '../assets/css/base.less';
#header{
 background:@baseColor;
 text-align:center;
 height:40px;
 line-height:40px;
 color:#fff;

 position:fixed;
 top:0;
 left:0;
 width:100%;
 i{
     position:absolute;
     left:10px;
     font-size:20px;
 }
}
</style>
