<template>
  <div>
    <img class="live-feature" :src="src" v-on:load="loaded" style="transition: opacity 1.2s ease-out;" v-bind:style="{'opacity': finish ? 1 : 0}">
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
        }, 200)
      }
    }
  }
</script>
