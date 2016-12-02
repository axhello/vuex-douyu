<template>
  <section class="content">
    <swiper class="my-swipe" :options="swiperOption">
      <swiper-slide class="silde" v-for="billboard in billboards">
        <a>
          <image-placeholder :src='billboard.imageUrl' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
        </a>
      </swiper-slide>
    </swiper>
    <div class="m-row">
      <live-list :lives="liveroomslists"></live-list>
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
        billboards: [
        {imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201610151243569733.jpg'},
        {imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201610151502128990.jpg'},
        {imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201610151500351532.jpg'},
        {imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201610151500351532.jpg'},
        {imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201610151408283380.jpg'},
        {imageUrl: 'https://staticlive.douyucdn.cn/upload/signs/201610151514383789.jpg'}
        ]
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
    margin-top: .26666667rem;
    padding: 0 .13333333rem .13333333rem;
    width: 100%;
    background-color: #fff;
  }
</style>
