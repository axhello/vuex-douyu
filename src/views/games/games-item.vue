<template>
  <router-link class="n-list-item" :to="{name: 'roomlists', params: {id: games.shortName, name: games.cate2Name}}">
    <image-placeholder :src="games.icon" ></image-placeholder>
    <p class="title">{{ games.cate2Name }}</p>
  </router-link>
</template>
<script>
  import ImagePlaceholder from '../../components/image-placeholder'
  export default {
    props: {
      games: {
        type: Object,
        required: true
      }
    },
    mounted () {
      // console.log(this.games)
    },
    components: {
      ImagePlaceholder
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