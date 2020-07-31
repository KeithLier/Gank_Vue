<template>
  <div>
    <tab-bar :currentIndex="currentIndex" @tab="changeTab"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/TabBar.vue';

export default {
  name: 'HomePage',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
