<template>
  <router-link :to="{name: 'detail', params: {id: film.room_id}}" class="live">
      <image-placeholder :src="film.room_src"></image-placeholder>
      <div class="live-title">{{film.room_name}}</div>
      <div class="live-info">
        <span class="dy-name">{{film.nickname}}</span>
        <span class="popularity">{{film.online | fixed}}</span>
      </div>
  </router-link>
</template>

<script>
  import ImagePlaceholder from '../components/image-placeholder'
  export default {
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    data () {
      return {}
    },
    components: {
      ImagePlaceholder
    }
  }
</script>
<style lang='less'>
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