<template>
	<div class="n-list clearfix">
		<router-link v-for="(catelist, index) in catelists" :key="index" class="n-list-item" 
      :to="{name: 'rooms', params: {name: catelist.shortName}}">
      <img class="live-feature" :src="catelist.icon">
			<p class="title">{{ catelist.cate2Name }}</p>
		</router-link>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'category',
  computed: {
    ...mapGetters(['catelists'])
  },
  created() {
    this.$store.dispatch('fetchCateList', this.$route.params)
  },
  watch: {
    '$route.params.type'() {
      this.$store.dispatch('fetchCateList', this.$route.params)
    }
  }
}
</script>

<style lang="scss">
.n-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f4f4f4;
  z-index: 4;
  .n-list-item {
    margin: 0;
    padding: 0;
    float: left;
    width: 3.3rem;
    height: 3.3rem;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    text-align: center;
    font-size: 0.32rem;
    color: #000;
    margin-left: 1px;
    &:nth-child(3n) {
      border-right: none;
    }
    img {
      margin-top: 0.66666666rem;
      margin-bottom: 0.133333333rem;
      width: 1.62666666rem;
      height: 1.62666666rem;
      border-radius: 0.8133333rem;
    }
  }
}
</style>