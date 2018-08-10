<template>
  <div class="main">
    <dy-navbar/>
    <div class="view">
      <router-view />
    </div>
    <dy-sidebar/>
  </div>
</template>

<script>
import DySidebar from '@/components/DySidebar'
import DyNavbar from '@/components/DyNavbar'
export default {
  name: 'App',
  components: {
    DySidebar,
    DyNavbar
  }
}
</script>

<style lang="scss">

</style>
