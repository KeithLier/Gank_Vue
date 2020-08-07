<template name="tab-footer">
	<div class="tab-footer row-before">
		<div class="tab-footer-item" v-for="(item, index) in items" :key="index" :class="{'active': currentIndex==index}" @click.stop="chooseTab(item)">
			<img :src="currentIndex==index ? item.selectSrc : item.src" alt="">
			<p>{{item.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tab-footer',
		props: {
			currentIndex: Number,
		},
		data(){
			return {
				items: [ //底部导航数据
					{
						name: '每日干货', 
						index: 0, 
						url: '/', 
						src: require('../assets/home_normal.png'), 
						selectSrc: require('../assets/home_selected.png')
					},
					{
						name: '分类阅读', 
						index: 1, 
						url: 'category', 
						src: require('../assets/category_normal.png'), 
						selectSrc: require('../assets/category_selected.png')
          },
          {
						name: '我的', 
						index: 2, 
						url: 'mine', 
						src: require('../assets/me_normal.png'), 
						selectSrc: require('../assets/me_selected.png')
					}
				]
			}
		},
		methods:{
			chooseTab(item){
				this.$emit('tab', item);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tab-footer{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFF;
		position: fixed;
		bottom: 0;
		z-index: 995;		
	}
	.tab-footer-item{
		height: 50px;		
		display: inline-block;
		font-size: 0;
		text-align: center;
		padding: 0 15px;
		box-sizing: border-box;
	}
	.tab-footer-item img{
		width: 20px;
		margin: 8px 0 3px 0;
	}
	.tab-footer-item p{
		width: 100%;
		height: 20px;
		line-height: 15px;
		display: block;
		margin: 0;
		font-size: 12px;
		color: #aaa;
		vertical-align: top;
	}
	.tab-footer-item.active p{
		color: #000;
	}
</style>