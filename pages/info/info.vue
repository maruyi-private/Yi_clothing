<template>
	<view>
		<uni-steps :options = "option" :active="stept"></uni-steps>
		<physiological-info v-if="stept === 0" :phyData = "userinfo.phyData" @phySubmit="phySubmit()" />
		<face-info v-else-if="stept === 1" @faceSubmit="faceSubmit()" />
		<hobbies-info v-else-if="stept === 2" @hobbiesSubmit="hobbiesSubmit()" />
		<others-info v-else-if="stept === 3" @othersSubmit="othersSubmit()" />
	</view>
</template>

<script>
	import physiological from "./physiological.vue"
	import face from "./face.vue"
	import hobbies from "./hobbies.vue"
	import others from "./others.vue"
	export default {
		components: {
			"physiological-info": physiological,
			"face-info": face,
			"hobbies-info": hobbies,
			"others-info": others
		},
		data() {
			return {
				option: [{title: '生理信息'}, {title: '面容信息'}, {title: '兴趣爱好'}, {title: '补充信息'}],
				stept: 0,
				userinfo: {}
			}
		},
		watch: {
			userinfo(val) {
				console.log(val,"监听方法");
				this.userinfo = val;
			}
		},
		async onLoad() {
			// uni.showLoading({
			//     title: '加载中'
			// });
			
			// const res = await uniCloud.callFunction({
			// 	name: 'getCurrentUserBasicUserInfo',
			// 	data: { suserid: uni.getStorageSync('uid') }
			// });
			
			// this.userinfo = res.result.data[0];
			
			// uni.hideLoading();
			
			this.userinfo = uni.getStorageSync("userBasicInfo");
		},
		methods: {
			phySubmit(formdata) {
				console.log("formdata", formdata);
				uniCloud.callFunction({
					name: 'submitPhysiological',
					data: { phyData: formdata, suserid: uni.getStorageSync('uid') },
					success: (res) => {
						console.log('res', res);
						this.stept++
						// uni.showToast({
						// 	icon: 'success',
						// 	title: '保存成功！'
						// })
					},
					fail: (res) => {
						console.log('res', res);
						uni.showToast({
							icon: 'none',
							title: '保存失败！'
						})
					}
				})
			},
			faceSubmit(formdata) {
				uniCloud.callFunction({
					name: 'submitFace',
					data: { faceData: formdata, suserid: uni.getStorageSync('uid') },
					success: () => {
						this.stept++
						// uni.showToast({
						// 	icon: 'success',
						// 	title: '保存成功！'
						// })
					},
					fail() {
						uni.showToast({
							icon: 'none',
							title: '保存失败！'
						})
					}
				})
			},
			hobbiesSubmit(formdata) {
				uniCloud.callFunction({
					name: 'submitHobbies',
					data: { hobbiesData: formdata, suserid: uni.getStorageSync('uid') },
					success: () => {
						this.stept++
						// uni.showToast({
						// 	icon: 'success',
						// 	title: '保存成功！'
						// })
					},
					fail() {
						uni.showToast({
							icon: 'none',
							title: '保存失败！'
						})
					}
				})
			},
			othersSubmit(formdata) {
				uniCloud.callFunction({
					name: 'submitOthers',
					data: { otherData: formdata, suserid: uni.getStorageSync('uid') },
					success: () => {
						// this.stept++
						uni.showToast({
							icon: 'success',
							title: '保存成功！'
						})
						
						setTimeout(function () {
							uni.navigateBack({
								delta: 1
							})
						}, 2000);
					},
					fail() {
						uni.showToast({
							icon: 'none',
							title: '保存失败！'
						})
					}
				})
			}
		},
		computed: {
			async phyData() {
				return this.userinfo.phyData;
			}
		}
	}
</script>

<style>
</style>
