<template>
	<view class="home">
		<swiper autoplay indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.index">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		components: {"goods-list": goodsList},
		data() {
			return {
				navs: [{
					icon: "iconfont icon-ziyuan",
					title: "量身定制",
					path: "/pages/goods/goods"
				},
				// {
				// 	icon: "iconfont icon-tupian",
				// 	title: "信息完善",
				// 	path: "/pages/pics/pics"
				// },
				{
					icon: "iconfont icon-tupian",
					title: "信息完善",
					path: "/pages/info/info"
				},{
					icon: "iconfont icon-shipin",
					title: "学习视频",
					path: "/pages/videos/videos"
				},{
					icon: "iconfont icon-guanyuwomen",
					title: "联系我们",
					path: "/pages/contact/contact"
				}],
				swipers: [],
				goods: []
			}
		},
		onLoad() {
			this.getSwipers();
			this.getHotGoods();
			this.getUserBasicInfo();
		},
		methods: {
			// 获取轮播图
			async getSwipers() {
				// const res = await this.$myRequest({
				// 	url: "/api/getlunbo"
				// });
				uniCloud.callFunction({
					name: 'getLunboImg',
					data: {}
				}).then(res => {
					this.swipers = res.result.data
				})
			},
			async getHotGoods() {
				uniCloud.callFunction({
					name: 'getClothesList'
				}).then(res => {
					this.goods = res.result.data
					console.log('res2', res);
				})
				// const res = await this.$myRequest({
				// 	url: "/api/getgoods?pageindex=1"
				// });
				// this.goods = res.data.message;
				// this.goods = [];
			},
			navItemClick(url) {
				uni.navigateTo({
					url
				});
			},
			async getUserBasicInfo() {
				const suserid = uni.getStorageSync('uid');
				if(suserid != null) {
					uniCloud.callFunction({
						name: 'getCurrentUserBasicUserInfo',
						data: { suserid },
						success: (res) => {
							uni.setStorageSync('userBasicInfo', res.result.data[0])
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin-left: 33.75rpx;
					margin-top: 20rpx;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian {
					font-size: 45rpx;
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			margin-top: 10px;
			background: #eee;
			overflow: hidden;
			.tit {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
