<template>
	<div>
		<botton @click="
		increment">+</botton>
		<botton v-on:click="decrement">-</botton>
		<p><span>{{ num  }}</span></p>
	</div>
</template>
<style type="text/css"></style>
<script>
	
	export default {
		name: 'hello',
		props: ['num'],
		data() {
			return {
				num: 0
			}
		},

		methods: {
			increment() {
				this.$emit('incre');
			},
			decrement() {
				this.$emit('descre');
			}
		}
	}
</script>