<template>
  <div class="n-list clearfix">
    <games-item v-for="allgames in allgameslists.cate2Info" :games="allgames"></games-item>
  </div>
</template>
<script>
  import GamesItem from './games-item'
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      allgameslists: 'getAllGamesLists'
    }),
    mounted () {
      this.$store.dispatch('fetchAllGamesLists', this.$route.query.type)
    },
    watch: {
      '$route.query.type' () {
        this.$store.dispatch('fetchAllGamesLists', this.$route.query.type)
      },
      'allgameslists' () {
        if (this.allgameslists.cate1Info.length === undefined) {
          window.localStorage.setItem('cateTitle', this.allgameslists.cate1Info.cate1Name)
        } else {
          window.localStorage.setItem('cateTitle', '全部')
        }
      }
    },
    components: {
      GamesItem
    }
  }
</script>
<style lang='less'>
  .n-list {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #F4F4F4;
    z-index: 4;
  }
</style>