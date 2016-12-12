<template>
 <div class="m-row">
 <div class="title"><span>热门游戏</span> <strong>{{getGameTitle}}</strong></div>
    <div class="live-list">
      <rooms-item v-for="roomlist in roomlists" :room="roomlist"></rooms-item>
    </div>
    <div class="more" v-if="!hidden" @click="loadMore">加载更多</div>
 </div>
</template>
<script>
  import RoomsItem from './rooms-item'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        obj: {id: this.$route.params.id, limit: 8},
        hidden: false
      }
    },
    computed: {
      ...mapGetters({
        roomlists: 'getRoomlists',
        getGameTitle: 'getGameTitle'
      })
    },
    mounted () {
      this.$store.dispatch('fetchRoomLists', this.obj)
      this.$store.dispatch('getGameTitle', this.$route.params.name)
    },
    methods: {
      loadMore () {
        this.obj.limit = this.obj.limit + 8
        if (this.obj.limit > 100) {
          this.obj.limit = 100
          this.hidden = true
        }
        this.$store.dispatch('fetchRoomLists', this.obj)
      }
    },
    components: {
      RoomsItem
    }
  }
</script>
<style lang='less'>
  .m-row {
    .more {
      display: block;
      margin: .25555rem 0;
      height: 1.08695652rem;
      line-height: 1.08695652rem;
      text-align: center;
      border: 1px solid #DDD;
      font-size: .373333333rem;
      color: #7A7A7A;
      border-radius: .1333333rem;
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
</style>
