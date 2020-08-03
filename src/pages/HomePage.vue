<template>
  <div>
    <nav-bar title="首页" >
    </nav-bar>
    <div class="swiper-page" :style="{width: getScreenWidth,height:200 + 'px'}">
      <swiper class="pic-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-container" v-for="(item, index) in banners" :key="index">
          <img ref="images" class="images" :src="item.image" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

import navBar from '@/components/NavBar.vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

require("swiper/dist/css/swiper.css")
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
      navBar,
      swiper,
      swiperSlide
  },
  data () {
    return {
      swiperOption: {
          pagination: {
            el:'.swiper-pagination'
          },
          //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //滑动速度
          speed:1000,
          direction: "horizontal",
      },
      banners: []
    }
  },
  mounted() {
    this.getBanners()
  },
  computed: {
    getScreenWidth () {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
  },
  methods:{
    getBanners: function () {
      axios.get('https://gank.io/api/v2/banners')
      .then(response => {
        this.banners = response.data.data;
      })
      .catch(error => {

      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.swiper-page {
  .swiper-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 20px;
  }
}
</style>
