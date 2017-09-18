<template>
  <section class="content">
    <swiper></swiper>  
    <div class="m-row">
      <live-list :lives="liveroomslists"></live-list>
    </div>
  </section>
</template>
<script>
  import LiveList from './live-list'
  import Swiper from '../../components/swiper'
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
    }),
    computed: {
      ...mapGetters({
        liveroomslists: 'getliveRoomsLists'
      })
    },
    created () {
      this.$store.dispatch('fetchLiveRoomsLists', 30)
    },
    components: {
      LiveList,
      Swiper
    }
  }
</script>
<style lang="less">
  .my-swipe {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .m-row {
    position: relative;
    box-sizing: border-box;
    padding: 0 .13333333rem .13333333rem;
    width: 100%;
    background: #fff;
  }
</style>
