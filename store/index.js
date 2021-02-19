import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// baseUrl:'http://192.168.8.106/',
		baseUrl: '',
		invoiceBaseUrl: '', //
		baseImgUrl: '', //七牛云图片查看
		appkey: '',
		login_token: '12123', //登录token

		hasLogin: true, //是否已经登陆
		hasBoundHouse: true, //是否绑定房产
		myHouse: '', //个人中心数据
		hasAuthorized: false, //是否微信授权
		wxUserInfo: '', //微信登录信息

		city: {}, //绑定城市
		village: {}, //绑定楼盘
		tower: {}, //绑定楼栋
		unit: {}, //绑定单元
		room: {}, //绑定房号

		myRoom: {}, //当前房产和全部车位信息
		changeCar: '', //选择车位
		carData: {}, //车位欠费数据
		roomData: {}, //房屋欠费数据
		orderData: '', //支付订单数据
		accountData: '', //用户账户信息

		qiniuData: '', //服务端七牛云数据
		contacts: '', //报事报修联系人
		familyData: '', //报事报修
		publicData: '', //投诉建议

		pushMessage:'', //推送数据
	},
	mutations: {
		updatePushMessage(state, message) {
			/**
			 * 注意：这里为了方便预览查看效果，始终对 payload 做了序列化的处理。
			 * 实际开发期中，请自行调整代码并注意发送的 payload 消息格式。
			 */
			// let payload = message.payload;
			// if (typeof payload !== 'string') {
			// 	message.payload = JSON.stringify(payload);
			// }
			state.pushMessage = message || {};
		},
		bindHouse(state, data) { //绑定房产
			state.hasBoundHouse = true;
			try {
				uni.setStorageSync('hasBoundHouse', true);
			} catch (e) {
				// error
			}
		},
		setQiniuData(state, data) {
			state.qiniuData = data;
		},
		setAccountData(state, data) {
			state.accountData = data;
		},
		setFamilyData(state, data) {
			state.familyData = data;
		},
		setPublicData(state, data) {
			state.publicData = data;
		},
		setContacts(state, data) {
			state.contacts = data;
		},
		setHasLogin(state, data) { //设置已登录
			state.hasLogin = true;
		},
		setMyRoom(state, data) {
			state.myRoom = data;
		},
		loginToken(state, data) { //登陆token
			state.login_token = data.login_token;
			state.hasLogin = true;
			try {
				uni.setStorageSync('hasLogin', true);
			} catch (e) {
				// error
			}
		},
		loginWeChat(state, userInfo) { //微信登陆信息
			if (userInfo.openId !== null) {
				state.hasAuthorized = true;
				state.wxUserInfo = userInfo;
				try {
					uni.setStorageSync('wxUserInfo', userInfo);
				} catch (e) {
					// error
				}
			}
		},
		logout(state) { //退出登陆
			state.hasLogin = false;
			state.myHouse = '';
			state.login_token = null;
			try {
				uni.removeStorageSync('hasLogin');
				uni.removeStorageSync('wxUserInfo');
				uni.removeStorageSync('loginToken');
			} catch (e) {
				// error
			}
		},
		setChangeCar(state, data) {
			state.changeCar = data
		},

		setCity(state, data) { //城市
			state.city = data
			state.village = ''
			state.tower = ''
			state.unit = ''
			state.room = ''
		},
		setVillage(state, data) { //楼盘
			state.village = data
			state.tower = ''
			state.unit = ''
			state.room = ''
		},
		setTower(state, data) { //楼栋
			state.tower = data
			state.unit = ''
			state.room = ''
		},
		setUnit(state, data) { //单元
			state.unit = data
			state.room = ''
		},
		setRoom(state, data) { //房号
			state.room = data
		},

		setCarData(state, data) {
			state.carData = data;
		},
		setRoomData(state, data) {
			state.roomData = data;
		},
		setMyHouse(state, data) {
			console.log("data: " + JSON.stringify(data));
			state.hasLogin = true;
			if (data.ownerInfo.roomid) {
				state.hasBoundHouse = true;
				state.myHouse = data;
			} else {
				state.hasBoundHouse = false;
			}
		},
		setOrderData(state, data) {
			state.orderData = data;
		}
	},
	actions: {
		loginToken(context) {
			context.commit('loginToken')
		},
		loginWeChat(context) {
			context.commit('loginWeChat')
		},
		setTower(context) {
			context.commit('setTower')
		},
		setUnit(context) {
			context.commit('setUnit')
		},
		setRoom(context) {
			context.commit('setRoom')
		},
		setMyRoom(context) {
			context.commit('setMyRoom')
		}
	}
})

export default store