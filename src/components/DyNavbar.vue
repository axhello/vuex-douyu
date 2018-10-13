<template>
  <nav id="toolbar">
    <div class="toolbar-icon" @click="showNav">
      <svg-icon icon-class="menu"></svg-icon>
    </div>
    <div class="toolbar-title"></div>
    <div class="toolbar-left">
      <router-link to='/' class="home-link">斗鱼TV</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'DyNavbar',
  methods: {
    showNav() {
      this.$store.dispatch('changeLeftNavState', true)
      window.document.body.className = 'slide-overflow'
    }
  }
}
</script>
<style lang="scss">
#toolbar {
  background: #282828;
  color: #fff;
  font-size: 0.427rem;
  position: fixed;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  top: 0;
  z-index: 4;
  height: 1.233rem;
  line-height: 1.233rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .toolbar-icon {
    text-align: left;
    padding-left: 10px;
    flex: 1;
  }
  .toolbar-title {
    flex: 4;
  }
  .toolbar-left {
    text-align: right;
    padding-right: 10px;
    flex: 1;
    a {
      color: #f70;
      font-weight: 600;
    }
  }
}
.menu-title, .home-link {
  font-size: .9em;
}
</style>
