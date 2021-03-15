const BASE_URL = "http://localhost:8082"
const UNI_APP_BASE_URL = "https://vkceyugu.cdn.bspapp.com"

function getWeixinCode() {
	return new Promise((resolve, reject) => {
		// #ifdef APP-PLUS
		weixinAuthService.authorize(function(res) {
			resolve(res.code)
		}, function(err) {
			console.log(err)
			reject(new Error('微信登录失败'))
		});
		// #endif
		// #ifdef MP-WEIXIN
		uni.login({
			provider: 'weixin',
			success(res) {
				console.log('res', res);
				resolve(res.code)
			},
			fail(err) {
				reject(new Error('微信登录失败'))
			}
		})
		// #endif
	})
}

// 微信登录
export const loginByWeixin = () => {
	return new Promise((resolve, reject) => {
		getWeixinCode().then((code) => {
			// console.log('code', code);
			// return uniCloud.callFunction({
			// 	name: 'loginByWeixin',
			// 	data: {
			// 		action: 'logout',
			// 		params: {
			// 			code: uni.getStorageSync('uni_id_token')
			// 		}
			// 	}
			// }).then(() => {
			// 	console.log('token', uni.getStorageSync('uni_id_token'));
			// })
			
			
			return uniCloud.callFunction({
				name: 'loginByWeixin',
				data: {
					action: 'loginByWeixin',
					params: {
						code,
					}
				}
			})
		}).then((res) => {
			// uni.showModal({
			// 	showCancel: false,
			// 	content: JSON.stringify(res.result)
			// })
			if (res.result.code === 0) {
				uni.setStorageSync('uni_id_token', res.result.token)
				uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
			}
			resolve(res)
		}).catch((e) => {
			console.error(e)
			uni.showModal({
				showCancel: false,
				content: '微信登录失败，请稍后再试'
			})
			reject(e)
		})
	})
}

// 绑定微信
export const bindWeixin = () => {
	return new Promise((resolve, reject) => {
		getWeixinCode().then((code) => {
			return uniCloud.callFunction({
				name: 'loginByWeixin',
				data: {
					action: 'bindWeixin',
					params: {
						code: code,
					}
				}
			})
		}).then((res) => {
			uni.showModal({
				showCancel: false,
				content: JSON.stringify(res.result)
			})
			resolve(res)
		}).catch((e) => {
			uni.showModal({
				showCancel: false,
				content: '微信绑定失败，请稍后再试'
			})
			reject(e)
		})
	})
}

// 解绑微信
export const unbindWeixin = () => {
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: 'loginByWeixin',
			data: {
				action: 'unbindWeixin'
			},
			success(res) {
				uni.showModal({
					showCancel: false,
					content: JSON.stringify(res.result)
				})
				resolve(res)
			},
			fail(e) {
				console.error(e)
				uni.showModal({
					showCancel: false,
					content: '微信解绑失败，请稍后再试'
				})
				reject(e)
			}
		})
	})
}

// 获取微信openid
export const code2SessionWeixin = () => {
	return new Promise((resolve, reject) => {
		getWeixinCode().then((code) => {
			return uniCloud.callFunction({
				name: 'loginByWeixin',
				data: {
					action: 'code2SessionWeixin',
					params: {
						code,
					}
				}
			})
		}).then((res) => {
			uni.showModal({
				showCancel: false,
				content: JSON.stringify(res.result)
			})
			resolve(res)
		}).catch((e) => {
			console.error(e)
			uni.showModal({
				showCancel: false,
				content: '微信登录失败，请稍后再试'
			})
			reject(e)
		})
	})
}

export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || "GET",
			data: options.data || {},
			success: (res) => {
				console.log(res);
				if (res.data.status !== 0) {
					return uni.showToast({
						title: "获取数据失败！"
					})
				}
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title: "请求接口失败！"
				});
				reject(err);
			},
		})
	})
}