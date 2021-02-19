let utils = {}

utils.isPhone = (e) => {
	let phone = e;
	var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (myreg.test(phone) === false) {
		uni.showToast({
			icon: 'none',
			title: '请输入正确的手机号'
		});
		return false;
	}
	return true;
}
utils.isIdCard = (card) => {
	let reg =
		/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
	if (reg.test(card) === false) {
		uni.showToast({
			icon: 'none',
			title: '请输入正确的身份证号'
		});
		return false;
	}
	return true;
}
//数组去重
utils.unique = function(array) {
	var arr = []; //创建新数组
	for (var i = 0; i < array.length; i++) { //遍历当前数组
		if (arr.indexOf(array[i]) === -1) { //如果等于-1，那么也是就是新数组中没有一项和当前数组一样
			arr.push(array[i])
		}
	}
	return arr;
}
//数组转换为字符串用逗号拼接
utils.toStrings = (arrayData) => {
	let str = '';
	for (let i = 0; i < arrayData.length; i++) {
		//最后一条数据
		let lastLength = arrayData.length - 1;
		//如果不是最后一条数据加上& 
		if (i !== lastLength) {
			str += arrayData[i] + ','
		} else {
			str += arrayData[lastLength]
		}
	}
	return str;
}

utils.timestampToTime = (timestamp) => {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
}
//当前月份
utils.yearMonth = () => {
	var date = new Date();
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y +''+ M;
}
//时间转时间戳（秒）
utils.toTimesTamp = (times) => {
	let str = times.replace(/-/g, '/');
	let time = new Date(str);
	let timestamp = time.getTime();
	return parseInt(timestamp / 1000);
}
export default utils;