<template>
  <div class="n-list clearfix">
    <games-item v-for="categorylist in categorylists.cate2Info" :games="categorylist" 
    :cateName="categorylists.cate1Info"></games-item>
  </div>
</template>
<script>
  import GamesItem from './games-item'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        categorylists: 'getCategoryList'
      })
    },
    created () {
      this.$store.dispatch('fetchCategoryList', this.$route.params)
    },
    watch: {
      '$route.params.type' () {
        this.$store.dispatch('fetchCategoryList', this.$route.params)
      }
    },
    components: {
      GamesItem
    }
  }
</script>
<style lang="less">
  .n-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #F4F4F4;
    z-index: 4;
  }
</style>