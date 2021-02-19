<template>
	<view class="center">
		<view class="center_top" style="background-image: url('/static/img/main-banner.jpg');"><view class="mask"></view></view>
		<view class="center_box_bg">
			<view class="profily">
				<view class="base" v-if="hasBoundHouse === true && hasLogin === true">
					<view class="profily_header" v-if="!userInfo" :style="'background-image: url(' + defaultImg+')'"></view>
					<view class="profily_header" v-if="userInfo" :style="'background-image: url(' + userInfo.avatarUrl + ')'"></view>
					<view>
						<view>
							<text>{{ myHouse.ownerInfo.realname }}</text>
						</view>
						<view>
							<text>{{ myHouse.ownerInfo.villageaddr }}-{{ myHouse.ownerInfo.villagename }}</text>
						</view>
						<view>
							<text class="room-number">ID号: {{ myHouse.ownerInfo.roomnum }}</text>
						</view>
					</view>
					<image @click="logout" src="/static/fumou-center-template/setting.png" mode=""></image>
				</view>
				<view class="base" v-if="hasBoundHouse === false && hasLogin === true">
					<view class="profily_header" :style="'background-image: url('+ defaultImg +')'"></view>
					<view>
						<view @click="getNav('bound-house')"><text>请绑定房产</text></view>
					</view>
					<image @click="logout" src="/static/fumou-center-template/setting.png" mode=""></image>
				</view>
				<view class="base" v-if="hasLogin === false">
					<view class="profily_header" :style="'background-image: url('+ defaultImg +')'"></view>
					<view>
						<view @click="getNav('login')"><text>请登录</text></view>
					</view>
				</view>
				<view class="order_status">
					<view class="status" v-for="(item, index) in status" :key="index" @click="getNav(item.url)">
						<image class="icon" :src="item.icon" mode="aspectFill"></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
			<view class="baiban"></view>
			<view class="center_menu">
				<view class="menu_item" v-for="(item, index) in menus" :key="index" @click="getNav(item.url)">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>
		<view class="uni-empty">
			版权所有
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			defaultImg:'/static/logo.png',
			status: [
				{
					name: '我的订单',
					icon: '/static/fumou-center-template/one.png',
					url: 'order'
				},
				{
					name: '报事工单',
					icon: '/static/fumou-center-template/2.png',
					url: 'repair-order'
				},
				{
					name: '发票下载',
					icon: '/static/fumou-center-template/3.png',
					url: 'electronic_invoice'
				},
				{
					name: '我的余额',
					icon: '/static/fumou-center-template/4.png',
					url: 'charge-money'
				}
			],
			menus: [
				{
					name: '我的房产',
					icon: '/static/fumou-center-template/5.png',
					url: 'my-house'
				},
				{
					name: '我的车辆',
					icon: '/static/fumou-center-template/6.png',
					url: 'my-car'
				},
				{
					name: '报事工单',
					icon: '/static/fumou-center-template/8.png',
					url: 'repair-order'
				},
				{
					name: '联系物业',
					icon: '/static/fumou-center-template/10.png',
					url: 'call'
				},
				{
					name: '关于我们',
					icon: '/static/fumou-center-template/10.png',
					url: 'about'
				}
			],
			ownerInfo: ''
		};
	},
	onShow() {
		// this.getData();
	},
	methods: {
		getData() {
			let data = {};
		},
		logout() {
			uni.showModal({
				title: '是否退出登陆？',
				content: '退出登陆将无法收到消息,您真的要退出登陆吗？',
				success: res => {
					if (res.confirm) {
						setTimeout(() => {
							this.$store.commit('logout');
							// this.$Router.replaceAll({name:'login'})
						}, 100);
					}
				}
			});
		},
		getNav(url) {
			if (!url) {
				uni.showToast({
					icon: 'none',
					title: '正在开发...'
				});
				return;
			}
			uni.navigateTo({
				url: '../login/login'
			})
		}
	},
	computed: {
		userInfo() {
			let userInfo = {};
			uni.setStorage({
				'userInfo' : 'mry'
			})
			try {
				userInfo = uni.getStorageSync('userInfo');
				return userInfo;
			} catch (e) {
				// error
			}
			return userInfo;
		},
		myHouse() {
			return this.$store.state.myHouse;
		},
		hasBoundHouse(){
			return this.$store.state.hasBoundHouse;
		},
		hasLogin(){
			return this.$store.state.hasLogin;
		}
	}
};
</script>

<style>
 @import url("./member.css");
</style>