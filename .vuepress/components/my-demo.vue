<template>
    <div class="outer-wrapper">
         <div style="width:100%;height:50px;overflow:hidden;bottom:0px;position: fixed;padding: 0 20px;z-index:500">
        <div class='info' style="position:absolute;width:3000px;left:calc(100vw);color:#f00a;font-weight:bold">本页面为个人观影爱好所收集，无任何商业用途，也从未授权任何人使用。链接有效期为72小时。特此声明。</div>
    </div>
    
          <div class="recommendPage">
    <swiper :options="swiperOption" ref="swiperOption" v-if='ads.length>0'>
        <template v-for="ad in ads">
            <swiper-slide :key="ad.id"><a :href="ad.link" >
                        <img :src="ad.logo" :alt="ad.link">
    </a></swiper-slide>
        </template>
      
    </swiper>
  </div>
    <div id="md">
        
    </div>
    </div>

</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import axios from 'axios'
var markdown = require( "markdown" ).markdown;
window.onload= function(){
     let _body = document.querySelector(".info");
    _body.classList.toggle("infotxt");
}
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      ads:[],
      swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
　　observeParents:true,//修改swiper的父元素时，自动初始化swiper 
       spaceBetween: 20,
       centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: true,
          disableOnInteraction: false
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    
    // document.getElementById("md").innerHTML = markdown.toHTML(``) ;
    axios.get('https://service-hzkkw8xs-1253947161.gz.apigw.tencentcs.com/release/').then(res=>{
        if(res.data){
            this.ads = res.data
        }
    })
  }
};
</script>
<style scoped >
.infotxt{
     transform: translate3d(-3500px, 0, 0);
            transition: all 25s ease-in-out;
}
.swiper-container{
  overflow: hidden;
  /*height: 240px;*/
  width: 100%;
  height: 140px;
  /*padding: 0 20px;*/
      margin-right: auto;
    margin-left: auto;
        /*border: 2px red solid;*/
        position: relative;
}  
@media screen and (min-width: 768px) {
    .swiper-container{
          height: 300px;
        } 
}
.swiper-wrapper{
    position: relative;
    width: 90%;
    height: 100%;
    z-index: 1;
    overflow: visible;
}
.swiper-container .swiper-wrapper .swiper-slide{
    /*width: 60%;*/
   /* margin-right: 10px;*/
   /*margin-right: 10px;*/
}
.swiper-slide{
        -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    /*width: 100%;*/
    height: 100%;
    position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    /*box-shadow: 0 4px 10px rgb(51 51 51 / 20%);*/
    /*box-sizing: border-box;*/
}
.swiper-container .swiper-wrapper .swiper-slide-active {
    width: 90%;
}


</style>
