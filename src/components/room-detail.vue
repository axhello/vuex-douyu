<template>
  <iframe class="dy-inframe" frameborder="0" :src="roomId"></iframe>
</template>
<script>
  export default {
    computed: {
      roomId () {
        return '//m.douyu.com/' + this.$route.params.id
      }
    }
  }
</script>
<style lang='less'>
  .dy-inframe {
    width: 100%;
    height: 1050px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
