<template>
  <div class="main">
    <navbar></navbar>
    <div class="view">
      <router-view></router-view>
    </div>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import { mapGetters } from 'vuex'
export default {
  components: {
    Sidebar, Navbar
  },
  computed: mapGetters({
    loading: 'getLoading'
  })
}
</script>

<style lang='less'>
  @import "assets/styles/icon.css";
  @import "assets/styles/reset.css";
  body.slide-overflow {
    overflow: hidden;
  }
  .view{
    margin-top: 1.333rem;
  }
  html body {
    line-height: 1.5;
    font-family: "Helvetica Neue","Arial","PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    color: #333;
    background-color: #F4F4F4;
  }
  * {
    box-sizing: border-box;
  }
  .clearfix() {
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
  }
  /*Usage as a Mixin*/
  .clearfix {
    .clearfix();
  }
</style>
