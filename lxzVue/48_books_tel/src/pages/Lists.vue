<template>
    <div>
        <mHeader>列表页</mHeader>
        <!-- 在dom上添加属性ref,然后通过$refs.scroll 获取这个dom元素，  scroll事件 -->
        <div class="content" ref='scroll' @scroll="scrollMore">
            <ul>
                <!-- <li v-for="(item,index) in lists" :key="index"> -->
                <!-- 页面跳转：路由跳转，用router-link -->
                <!-- to的属性值是对象，前面要加：，-->
                <!-- router-link默认是a标签，我们可以用tag='li'改成li标签 -->
                <router-link :to="{name:'detail',params:{bookid:item.id}}" tag="li" v-for="(item,index) in lists" :key="index">
                    <img :src="item.img" alt="">
                    <div>
                        <p class="name">{{item.name}}</p>
                        <p class="info">{{item.info}}</p>
                        <p class="price">￥{{item.price}}</p>
                        <button class="delBtn" @click.stop = 'del(item.id)'>删 除</button>
                        <!-- 点击删除的时候，会冒泡触发父级的跳转详情的方法，所以用.stop阻止冒泡 -->
                    </div>
                </router-link>
                <!-- </li> -->

                <li v-if='hasMore' @click='more'>加载更多...</li>
            </ul>
        </div>
    </div>
</template>
<script>   
import mHeader from '../components/mHeader'; 
import {bookLists,removeBook,getMore} from '../api';
    export default {
        name:'add',
        data(){
            return {
                lists:[],
                hasMore:true, 
                offset:0,
                loading:false,  //默认是没有加载
            }
        },
        components:{
            mHeader,
        },
        created(){
            // this.initLists();
            this.getMoreData();
        },
        mounted(){
            // 也可以在这里添加事件监听，操作dom
            // this.$refs.scroll.addEventListener('scroll',function(){
            //     this.scrollMore();
            // })

            let box = this.$refs.scroll;   //获取到要拖拽的元素
            // offsetTop -- 盒子的偏移量（要拖拽的盒子据顶部的距离）
            let boxOffsetTop = box.offsetTop;   //要拖拽的元素 距顶的距离
            // 拉的时候3个事件：touchstart \ touchmove \ touchend
            let move = 
            box.addEventListener('touchstart',(e)=>{    //绑定事件后，触发的时候是window只从这个函数，会有this问题，这里改成箭头函数
                //回调函数里有个  事件源  参数，
                // touchmove  和 touchend  都写在touchstart里面

                // box.scrollTop != 0 如果盒子的滚动条不在顶端（卷去的高度不为0） box.offsetTop != boxOffsetTop  盒子的偏移量不是一开始的偏移量  就return 跳出，不执行后面
                // 1.----只有滚动条在最顶部   或者  当前盒子在顶端的时候才能下拉刷新，其他时候不走这里，走的是scroll 事件
                if(box.scrollTop != 0 || box.offsetTop != boxOffsetTop) return;
                
                //拿当前开始的位置，在touchmove里用
                let  start = e.touches[0].pageY;   //手指点击的开始位置
                let distance = 0;
                let move = (e)=>{      //移动式的函数
                    let current = e.touches[0].pageY;   //移动后的当前位置
                    distance = current - start;    //如果为负则为上滑，不用管； 如果是正的，则是下拉，要刷新数据
                    if(distance > 0){
                        // 这里是下拉
                        if(distance <= 120){
                            box.style.top = boxOffsetTop + distance + "px";    //box 距顶的距离= 原来距顶的距离 +  滑动的距离
                        }else{
                            distance =120;
                            box.style.top = boxOffsetTop + distance + "px";    ////box 距顶的距离= 原来距顶的距离 +  最大滑动距离80
                        }
                        
                    }else{
                        // 2. ----------如果为负，上滑，不做处理，移除掉move 和 end事件
                        box.removeEventListener('touchmove',move);
                        box.removeEventListener('touchend',end);
                    }
                }
                let end = (e)=>{    //结束移动，松手后的函数
                    clearInterval(timer1);   //开启新定时器前，先关掉之前的定时器
                    let timer1 = setInterval(()=>{
                        distance -= 1;
                        box.style.top = boxOffsetTop + distance + "px";
                        if(distance <= 0){
                            // distance = 0;
                            clearInterval(timer1);   //满足条件了，不用再间隔一段事件减少一下distance了，关掉定时器
                            // 3.-------关掉了定时器，就不能再move 和end了
                            box.removeEventListener('touchmove',move);
                            box.removeEventListener('touchend',end);
                            this.lists = [];   //这是重新加载，要先清空原来的数据，获取新的
                            this.offset = 0 ;  //从第0条开始获取
                            this.getMoreData();
                        }

                    },2)
                }
                box.addEventListener('touchmove',move);
                box.addEventListener('touchend',end);
            },false)  //这里默认是false -- 事件冒泡机制

        },
        methods:{
            // async initLists(){
            //     this.lists = await bookLists();
            // },
            //加载更多
            async getMoreData(){
                // 有数据并且 不是正在加载 的时候去取数据
                if(this.hasMore && !this.loading){    //有更多数据的时候获取数据 
                    this.loading = true;  //进到这里变成了正在加载了
                    let {hasMore,books} =  await getMore(this.offset);
                    this.lists  = [... this.lists,...books];    //列表里是之前的书 +  获取到的5条
                    this.hasMore = hasMore;
                    this.loading = false;   //加载完了，没有正在加载
                    // this.offset += 5;   //获取数据后更改offset--开始取数据的条数
                    this.offset = this.lists.length;   //维护偏移量就是总书的长度
                }
            },
            more(){
                this.getMoreData();
            },
            scrollMore(){ 
                //触发scroll事件，可能触发n次，先进来开一个定时器，下次触发的时候将上一次的定时器清除调
                // 防抖节流
                clearTimeout(this.timer); //进后先清掉上次的定时器，然后开一个新的定时器
               
               this.timer = setTimeout(()=>{   //this.timer挂在了当前组件实例上了

                    // scrollTop 卷去的高度 + 元素.clientHeight 当前的可见区域的高度  +20 ==  元素的scrollHeight  元素总高;
                    let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll
                    if(scrollTop + clientHeight +20 > scrollHeight){
                        this.getMoreData();   //获取更多
                    }
                },25)
            },
             async del(id){
                await removeBook(id);   //删除数据返回的空对象，所以不用接收返回值, 调用这个接口删除了后台数据了
                //还要删除前台显示的数据
                this.lists = this.lists.filter(item=>item.id !== id);
                // this.initLists();    //或者重新获取数据也可以
             },
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
            &:nth-last-child(2){
                 border-bottom:none;
            }
            &:last-child{
                border-bottom:none;
                justify-content:center;
                padding:20px 0;
                color:#ccc;
            }
        }
    }
}
</style>