'use strict';

const db = uniCloud.database()
const collection = db.collection('TY_CLOTHES')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// const res = await collection.add([{
	// 	"id": 0,
	// 	"title": "羊毛衫女前短后长2020新款秋冬开叉韩版套头打底毛衣女短款外穿潮",
	// 	"img_url": "https://img.alicdn.com/imgextra/i2/3071050794/O1CN01YM8PiI1Hjh6cqxxd5_!!3071050794.jpg_60x60q90.jpg",
	// 	"sex": "woman",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"grey": "https://img.alicdn.com/imgextra/i1/3071050794/O1CN01HTTzyp1Hjh6kGBIHM_!!0-item_pic.jpg_60x60q90.jpg",
	// 		"yellow": "https://img.alicdn.com/imgextra/i3/3071050794/O1CN01jJnCSm1Hjh6Gp6qiy_!!3071050794.jpg_60x60q90.jpg",
	// 		"purple": "https://img.alicdn.com/imgextra/i2/3071050794/O1CN01YM8PiI1Hjh6cqxxd5_!!3071050794.jpg_60x60q90.jpg",
	// 		"pink": "https://img.alicdn.com/imgextra/i2/3071050794/O1CN01jFmPdb1Hjh6Gp6eH3_!!3071050794.jpg_60x60q90.jpg"
	// 	},
	// 	"sell_price": 128,
	// 	"stock_quantity": 208,
	// 	"stock": {
	// 		"grey": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"yellow": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"purple": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"pink": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// }])
	
	console.log('res1', res);
	
	//返回数据给客户端
	return event
};
