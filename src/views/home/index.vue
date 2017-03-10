<template>
  <section class="content">
    <swiper class="my-swipe" :options="swiperOption">
      <swiper-slide class="silde" v-for="billboard in billboards">
        <a>
          <image-placeholder :src='billboard.imageUrl'></image-placeholder>
        </a>
        <div class="swiper-pagination"></div>
        <div class="dy-swiper-txt">
            <span>{{billboard.title}}</span>
        </div>
      </swiper-slide>
    </swiper>
    <div class="m-row">
      <keep-alive>
        <live-list :lives="liveroomslists"></live-list>
      </keep-alive>
    </div>
  </section>
</template>
<script>
  import LiveList from './live-list'
  import ImagePlaceholder from '../../components/image-placeholder'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      swiperOption: {
        autoplay: 3000,
        autoHeight: true
      },
      ...mapGetters({
        liveroomslists: 'getliveRoomsLists'
      })
    },
    data () {
      return {
        billboards: [{
          imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201612160941003807.png',
          title: '使命召唤OL'
        }, {
          imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201612160742489659.jpg',
          title: '迎接光荣的进化'
        }, {
          imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201612160315127870.jpg',
          title: '暴走漫画'
        }, {
          imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201612160744472747.jpg',
          title: '一战 我今天贼稳'
        }, {
          imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201612160315572097.jpg',
          title: '漫威DC的秘密'
        }, {
          imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201612160650226184.jpg',
          title: '单拍模式赞一个'
        }]
      }
    },
    created () {
      this.$store.dispatch('fetchLiveRoomsLists', 30)
    },
    components: {
      LiveList, ImagePlaceholder, swiper, swiperSlide
    }
  }
</script>
<style lang='less'>
  .my-swipe {
    height: 100%;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  .silde img {
    width: 100%;
    height: 100%;
  }
  .m-row {
    position: relative;
    box-sizing: border-box;
    padding: 0 .13333333rem .13333333rem;
    width: 100%;
    background: #fff;
  }
  .swiper-pagination {
    position: absolute;
    transition: .3s;
    left: 0;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    bottom: 11px;
    background-color: #000;
    filter: Alpha(Opacity=50);
    background-color: rgba(0,0,0,.5);
    text-align: right;
  }
  .dy-swiper-txt {
    height: .8rem;
    line-height: .9rem;
    font-size: .373333333rem;
    color: #fff;
    position: absolute;
    bottom: 11px;
    z-index: 11;
    left: .2666666rem;
  }
</style>
