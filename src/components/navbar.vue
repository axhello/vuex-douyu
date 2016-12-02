<template>
  <nav id="toolbar">
    <h1 @click="showNav">
      <a href="javascript: void 0;">
        <div class="toolbar-title-icon">
          <span>直播分类</span><i class="iconfont icon-list"></i>
        </div>
      </a>
    </h1>
    <div id="nav-left">
      <router-link to='/' class="user">
        斗鱼TV
      </router-link>
    </div>
  </nav>
</template>
<script>
    export default{
      methods: {
        showNav () {
          this.$store.dispatch('changeLeftNavState', true)
        }
      }
    }
</script>
<style lang='less'>
  #toolbar {
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    h1 {
      color: #fff;
      font-size: 16px;
      line-height: 50px;
      text-align: left;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
      width: auto;
      height: 50px;
      margin: 0 auto;
      float: right;
      a {
        font-size: 16px;
        line-height: 50px;
        text-align: left;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
        .toolbar-title-icon {
          float: right;
          text-align: center;
          color: #999;
          margin-right: 15px;
          span {
            margin-right: 10px;
            color: #fff;
          }
        }
        .toolbar-title {
          float: left;
          font-size: 14px;
          color: #efefef;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
        }
      }
    }
  }
  .iconfont {
    font-size: 22px;
  }
  #nav-left {
    float: left;
      .city {
        float: left;
        font-size: 14px;
        padding: 0 6px;
      }
      .user {
        float: left;
        font-size: 16px;
        margin-left: 15px;
        text-align: center;
      }
      a {
        color: #ff7700;
        text-decoration: none;
      }
  }
</style>
