<template>
  <div id="app">
    <template>
      <router-view/>

      <tab-bar :currentIndex="currentIndex" @tab="changeTab"></tab-bar>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
