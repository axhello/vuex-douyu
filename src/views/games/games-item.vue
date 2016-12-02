<template>
  <router-link :to="{name: 'roomlists', params: {id: games.short_name}}">
    <div class="n-list-item">
      <img :src="games.game_icon" :alt="games.game_name">
      <p class="title">{{games.game_name}}</p>
    </div>
  </router-link>
</template>
<script>
  export default {
    props: {
      games: {
        type: Object,
        required: true
      }
    },
    methods: {
      getTitle () {
        console.log('ture')
        this.$store.dispatch('getGameTitle', this.games.game_name)
      }
    }
  }
</script>
<style lang='less'>
  .n-list .n-list-item {
    margin: 0;
    padding: 0;
    float: left;
    width: 3.3rem;
    height: 3.3rem;
    background-color: #F4F4F4;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    text-align: center;
    font-size: .32rem;
    color: #000;
    img {
      margin-top: .66666666rem;
      margin-bottom: .133333333rem;
      width: 1.62666666rem;
      height: 1.62666666rem;
      border-radius: .8133333rem;
    }
  }
</style>