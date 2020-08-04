<template>
  <div id="app">
    <template>
      <router-view/>

      <tab-bar v-if="$route.meta.requireTabBar" :currentIndex="currentIndex" @tab="changeTab"></tab-bar>
    </template>
  </div>
</template>

<script>

import tabBar from '@/components/TabBar.vue';

export default {
  name: 'App',
  components: {
			tabBar
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods:{
		changeTab(e){
			var _this = this;
      _this.currentIndex = e.index;
      _this.$router.push({path: e.url})
		}
	}
}
</script>

<style lang='less'>

#app {
  height: 100%;
}
body {
    background-color: #F3F3F3;
    margin: 0;
    height: 100%;
}

body {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
