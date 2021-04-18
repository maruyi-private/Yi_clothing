<template>
	<view>
		<uni-steps :options = "option" :active="stept"></uni-steps>
		<physiological-info v-if="stept === 0" @phySubmit="phySubmit()" />
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
				stept: 0
			}
		},
		methods: {
			phySubmit(formdata) {
				console.log("formdata", formdata);
				uniCloud.callFunction({
					name: 'submitPhysiological',
					data: { phyData: formdata },
					success: () => {
						this.stept++
						uni.showToast({
							icon: 'success',
							title: '保存成功！'
						})
					},
					fail() {
						uni.showToast({
							icon: 'none',
							title: '保存失败！'
						})
					}
				})
			},
			faceSubmit() {
				console.log("1");
			},
			hobbiesSubmit() {
				console.log("2");
			},
			othersSubmit() {
				console.log('3');
			}
		}
	}
</script>

<style>
</style>
