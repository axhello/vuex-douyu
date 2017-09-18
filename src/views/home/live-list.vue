<template>
  <!-- <div class="title"><span>元气领域</span><a href="#"></a></div> -->
  <div class="live-list">
    <live-item v-for="live in lives" :film="live"></live-item>
  </div>
</template>
<script>
  import LiveItem from '../../components/live-item'
  export default {
    props: {
      lives: {
        type: Array,
        required: true
      }
    },
    components: {
      LiveItem
    }
  }
</script>
<style lang="less">
.live-list {
  &:after {
    display: block;
    content: '';
    clear: both;
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