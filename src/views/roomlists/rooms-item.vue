<template>
  <router-link :to="{name: 'detail', params: {id: room.room_id}}" class="live">
      <image-placeholder :src="room.room_src"></image-placeholder>
      <div class="live-title">{{room.room_name}}</div>
      <div class="live-info">
        <span class="dy-name">{{room.nickname}}</span>
        <span class="popularity">{{room.online | fixed}}</span>
      </div>
  </router-link>
</template>
<script>
  import ImagePlaceholder from '../../components/image-placeholder'
  export default {
    props: {
      room: {
        type: Object,
        required: true
      }
    },
    components: {
      ImagePlaceholder
    }
  }
</script>
<style>
  
</style>