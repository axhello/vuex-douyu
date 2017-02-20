<template>
  <div style="background-size:100%;">
    <img class="live-feature" :src="src" v-on:load="loaded" style="width: 100%; transition: opacity 1.2s ease;" v-bind:style="{'opacity': finish ? 1 : 0}">
  </div>
</template>


<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      }
    },
    data () {
      return {
        finish: false
      }
    },
    methods: {
      loaded () {
        setTimeout(() => {
          this.finish = true
        }, 100)
      }
    }
  }
</script>
