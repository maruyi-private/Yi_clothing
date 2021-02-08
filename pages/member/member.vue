<template>
	<view class="member">
		<button @click="onclickLogin()">登录</button>
	</view>
</template>

<script>
	export default {
		methods: {
			async onclickLogin() {
				const res = await this.$login();
				console.log('res', res);
				console.log('success');
			}
		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">

</style>