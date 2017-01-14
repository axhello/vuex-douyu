<template>
  <div class="main">
    <Navbar></Navbar>
    <div class="application-view">
      <router-view></router-view>
    </div>
    <Sidebar></Sidebar>
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
  .application-view{
    padding: 50px 0 0;
  }
  html body {
    line-height: 1.5;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    color: #333;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto
  }
  *{
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
