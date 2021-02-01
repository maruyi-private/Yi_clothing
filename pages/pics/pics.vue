<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view
			@click="leftClickHandle(index, item.id)"
			:class="active === index ? 'active' : ''"
			v-for="(item, index) in pics"
			:key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in rightData" :key="item.id">
				<image :src="item.img_url" @click="previewImg(item.img_url)"></image>
				<!-- <image src="../../static/logo.png"></image> -->
				<text>{{item.title}}</text>
			</view>
			<text v-if="rightData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pics: [],
				active: 0,
				rightData: []
			}
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: "/api/getimgcategory"
				});
				this.pics = res.data.message;
				this.leftClickHandle(0, this.pics[0].id);
			},
			async leftClickHandle(index, id) {
				this.active = index;
				const res = await this.$myRequest({
					url: "/api/getimages/" + id
				});
				this.rightData = res.data.message;
			},
			previewImg(current) {
				const urls = this.rightData.map(x => {
					return x.img_url
				});
				uni.previewImage({
					current,
					urls
				});
			}
		},
		onLoad() {
			this.getPicsCate();
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			.active {
				background: $shop-color;
				color: #fff;
			}
			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.right {
			height: 100%;
			width: 520rpx;
			margin: 20rpx auto;
			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
