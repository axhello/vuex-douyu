<template>
 <div class="m-row">
 <div class="title"><span>热门游戏</span> <strong>{{getGameTitle}}</strong></div>
    <div class="live-list">
      <rooms-item v-for="roomlist in roomlists" :room="roomlist"></rooms-item>
    </div>
    <div class="more" style="display: block;">
      加载更多
    </div>
 </div>
</template>
<script>
  import RoomsItem from './rooms-item'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        roomlists: 'getRoomlists',
        getGameTitle: 'getGameTitle'
      })
    },
    mounted () {
      this.$store.dispatch('fetchRoomLists', this.$route.params.id, 30)
    },
    components: {
      RoomsItem
    }
  }
</script>
<style lang='less'>
  .more {
    margin: .25555rem 0;
    height: 1.08695652rem;
    line-height: 1.08695652rem;
    text-align: center;
    border: 1px solid #DDD;
    font-size: .373333333rem;
    color: #7A7A7A;
    border-radius: .1333333rem;
  }
</style>
