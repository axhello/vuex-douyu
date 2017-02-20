<template>
  <router-link  class="n-list-item" :to="{name: 'roomlists', params: {id: games.short_name, name: games.tag_name}}">
    <img :src="games.icon_url" :alt="games.tag_name">
    <p class="title">{{games.tag_name}}</p>
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
    mounted () {
      // console.log(this.games)
    }
  }
</script>
<style lang='less'>
  .n-list {
    .n-list-item {
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
      margin-left: 1px;
      &:nth-child(3n) {
        border-right: none;
      }
      img {
        margin-top: .66666666rem;
        margin-bottom: .133333333rem;
        width: 1.62666666rem;
        height: 1.62666666rem;
        border-radius: .8133333rem;
      }
    }
  }
</style>