<template>
 <div class="m-row">
    <div class="title">
        <span><img class="play-icon" src="../../assets/images/icon_play.png"> {{cateName}}</span> 
        <strong>{{gameName}}</strong>
    </div>
    <div class="live-list">
      <rooms-item v-for="roomlist in roomlists" :room="roomlist"></rooms-item>
    </div>
    <more-button>
      <div class="more-button" v-if="!hidden">
        <div v-show="!loading" @click="loadMore">加载更多</div>
        <div v-show="loading" class="ball-pulse"><div></div><div></div><div></div></div>
      </div>
    </more-button>
 </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import RoomsItem from './rooms-item'
  import MoreButton from '../../components/more-button.vue'

  export default {
    data: () => ({
      obj: {
        id: '',
        limit: 8
      },
      hidden: false,
      loading: false,
      cateName: '',
      gameName: ''
    }),
    computed: {
      ...mapGetters({
        roomlists: 'getRoomlists'
      })
    },
    created () {
      this.id = this.$route.params.id
      this.$store.dispatch('fetchRoomLists', this.obj)
    },
    methods: {
      loadMore () {
        this.obj.limit = this.obj.limit + 8
        if (this.obj.limit > 100) {
          this.obj.limit = 100
          this.hidden = true
        }
        setTimeout(() => {
          this.$store.dispatch('fetchRoomLists', this.obj)
          this.loading = true
          setTimeout(() => { this.loading = false }, 500)
        }, 800)
      }
    },
    watch: {
      'roomlists' () {
        this.gameName = this.$route.params.name
        this.cateName = this.$route.params.cateName
      }
    },
    components: {
      RoomsItem,
      MoreButton
    }
  }
</script>
<style lang="less">
  .m-row {
    .play-icon {
      width: .3999999rem; 
      height: .3999999rem;
      vertical-align: sub;
    }
    .title {
      font-size: 14px;
      margin-left: 10px;
      line-height: 1.13333333rem;
      strong {
        margin-left: .39525rem;
        color: #FA7122;
      }
    }
  }
  .live-list {
    .live {
      float: left;
      position: relative;
      display: block;
      margin: .13333333rem;
      width: 4.6rem;
      height: 3.28rem;
      color: #333;
      font-size: 12px;
      .live-feature {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.61333333rem;
        background-color: #000;
        border-radius: .2rem;
      }
      .live-title {
        position: absolute;
        bottom: 0;
        left: .2rem;
        width: 4rem;
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: .66666667rem;
      }
      .live-info {
        position: absolute;
        bottom: .66666667rem;
        left: 0;
        width: 100%;
        color: #fff;
        /*padding: .1rem 0;*/
        border-bottom-left-radius: .2rem;
        border-bottom-right-radius: .2rem;
        background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,.1) 30%, rgba(0,0,0,.8) 100%);
        .dy-name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 2.746666666rem;
          display: inline-block;
          padding-left: .2rem;
        }
        .popularity {
          float: right;
          padding-right: .2rem;
        }
      }
    }
  }
</style>
