<template>
  <aside class="application-sidebar">
    <div class="sidebar-container" :class="{'show-sidebar':show}">
      <div class="sidebar-list">
        <nav>
            <ul>
              <li v-for="menu in menuList" @click="hideNav">
                <router-link :to="{ path: menu.path, query: { type: menu.type }}">
                  <span>{{menu.name}}</span><i class="iconfont icon-arrow-right right"></i>
                </router-link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
    <div class="sidebar-overlay" v-show="show" @click="hideNav"></div>
  </aside>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        show: 'getLeftNavState'
      })
    },
    data () {
      let menuList = [
        {name: '全部', path: '/all', type: ''},
        {name: '热门游戏', path: '/all', type: 'game'},
        {name: '移动游戏', path: '/all', type: 'ydyx'},
        {name: '鱼乐星天地', path: '/all', type: 'ylxtd'},
        {name: '颜值', path: '/all', type: 'yz'},
        {name: '科技', path: '/all', type: 'kj'},
        {name: '文娱课堂', path: '/all', type: 'wykt'},
        {name: '正能量', path: '/all', type: 'znl'}
      ]
      return { menuList: menuList }
    },
    methods: {
      hideNav () {
        this.$store.dispatch('changeLeftNavState', false)
        window.document.body.className = ''
      }
    }
  }
</script>
<style lang='less'>
.application-sidebar {
  .sidebar-container {
    position: fixed;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 7.733rem;
    left: -7.733rem;
    z-index: 500;
    top: 0;
    bottom: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    &.show-sidebar {
      -webkit-transform: translateX(7.733rem);
      transform: translateX(7.733rem);
    }
    .sidebar-list {
      width: 100%;
      height: 100%;
      position: relative;
    }
    a{
      color: #9a9a9a;
      font-size: 14px;
    }
    nav {
      border-top: 1px solid #222;
      box-shadow: 0 1px 1px #363636 inset;
      background: #282828;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: .2rem;
      li {
        overflow: hidden;
        line-height: 49px;
        height: 50px;
        a {
          display: block;
          padding: 0 16px;
          border-bottom: 1px dotted #333;
          .right {
              float: right;
              color: #666;
              font-size: 15px;
              padding-top: 15px;
          }
        }
      }
    }
  }
  .sidebar-overlay {
    position: fixed;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: rgba(0,0,0,.7);
  }
}
</style>
