<template>
  <router-link :to="{name: 'detail', params: {id: film.room_id}}" class="live">
      <image-placeholder :src="film.room_src"></image-placeholder>
      <div class="live-title">{{film.room_name}}</div>
      <div class="live-info">
        <span class="dy-name">{{film.nickname}}</span>
        <span class="popularity">{{film.online | fixed}}</span>
      </div>
  </router-link>
</template>
<script>
  import ImagePlaceholder from './image-placeholder'
  export default {
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    components: {
      ImagePlaceholder
    }
  }
</script>