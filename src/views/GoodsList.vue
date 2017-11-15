<template>
	<div>
		这是购物列表<br>
		<p>goodsId:{{$route.params.goodsId}}</p>
		<p>username:{{$route.params.name}}</p>

		<router-link to="/goodsChild/title">显示标题</router-link>
		<router-link to="/goodsChild/img">显示图片</router-link>
		<div>
			<router-view></router-view>
		</div>
		<router-link to="/cart/23">购物车页面</router-link>
		<!-- 命名路由 start -->
		<!-- 坑:
			1、不能直接to,而是要v-bind:to
			2、name值要和路由中name值相同
		 -->
		<router-link v-bind:to="{name:'Cart',params:{cartId:20}}">命名式购物车页面</router-link>
		<!-- 命名路由 end -->
		<button @click="jumpCart">购物车页面</button>
	</div>
</template>
<script>
	// import  from 
	export default {
		data () {
			return {
			  
			}
		},
		components: {
			
		},
		create() {
			
		},
		methods: {
			jumpCart() {
				this.$router.push({path:'/cart',query:{'cartId':122}});
			}
		}
	}
</script>
<style type="text/css">
	p{ margin: 10px 0; }
</style>