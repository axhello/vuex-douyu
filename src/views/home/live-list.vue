<template>
  <!-- <div class="title"><span>元气领域</span><a href="#"></a></div> -->
  <div class="live-list">
    <live-item v-for="live in lives" :film="live"></live-item>
  </div>
</template>
<script>
  import LiveItem from '../../components/live-item'
  export default {
    props: {
      lives: {
        type: Array,
        required: true
      }
    },
    components: {
      LiveItem
    }
  }
</script>
<style lang='less'>
.live-list {
  &:after {
    display: block;
    content: '';
    clear: both;
  }
}
</style>