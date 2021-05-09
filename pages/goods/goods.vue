<template>
	<view class="goods_list">
		<uni-search-bar @confirm="search" v-model="searchValue" :radius="100"></uni-search-bar>
		<goods-list :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		components: {"goods-list": goodsList},
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false,
				searchValue: '',
				onsearch: false
			}
		},
		onLoad() {
			this.getGoodsList();
		},
		methods: {
			search() {
				this.pageindex = 1;
				this.goods = [];
				this.onsearch = true;
				this.getGoodsListBySearch();
			},
			async getGoodsListBySearch(callBack) {
				const userBasicInfo = uni.getStorageSync('userBasicInfo');
				const res = await uniCloud.callFunction({
					name: 'getGoodsListBySearch',
					data: {pageindex: this.pageindex, ...userBasicInfo, searchValue: this.searchValue},
					success: (res) => {
						this.goods = [...this.goods, ...res.result.data]
						callBack && callBack();
					}
				})
			},
			async getGoodsList(callBack) {
				const res = await uniCloud.callFunction({
					name: 'getCurrentUserClothes',
					data: {pageindex: this.pageindex}
				})
				this.goods = [...this.goods, ...res.result.data]
				// const res = await this.$myRequest({
				// 	url: "/api/getgoods?pageindex=" + this.pageindex
				// });
				// this.goods = [...this.goods, ...res.data.message];
				callBack && callBack();
			}
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex*10) {
				return this.flag = true;
			}
			this.pageindex++;
			if(this.onsearch) {
				this.getGoodsListBySearch();
			} else {
				this.getGoodsList();
			}
		},
		onPullDownRefresh() {
			this.pageindex = 1;
			this.goods = [];
			this.flag = false;
			setTimeout(() => {
				if(this.onsearch) {
					this.getGoodsListBySearch(() => {
						uni.stopPullDownRefresh();
					});
				} else {
					this.getGoodsList(() => {
						uni.stopPullDownRefresh();
					});
				}
			}, 1000);
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
		
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
