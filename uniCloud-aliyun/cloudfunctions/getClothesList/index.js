'use strict';

const db = uniCloud.database()
const collection = db.collection('TY_CLOTHES')

exports.main = async (event, context) => {
	
	const res = await collection
		.skip((parseInt(event.pageindex) - 1) * 10)
		.limit(10)
		.get();
	
	return res;
	
	//event为客户端上传的参数
	// console.log('event : ', event)
	
	// const res = await collection.doc('601d1701c9e7be0001cc2e98').update({
	// 	stype: 'sweater'
	// })
	
	// console.log("uodate", res);
	
	// const res = await collection.add([{
	// 	"id": 0,
	// 	"title": "羊毛衫女前短后长2020新款秋冬开叉韩版套头打底毛衣女短款外穿潮",
	// 	"img_url": "https://img.alicdn.com/imgextra/i2/3071050794/O1CN01YM8PiI1Hjh6cqxxd5_!!3071050794.jpg_60x60q90.jpg",
	// 	"sex": "woman",
	// 	"stype": "sweater",
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
	// },{
	// 	"id": 1,
	// 	"title": "针织短款t恤女短袖夏季2020年新款露背高腰法式修身黑色方领上衣",
	// 	"img_url": "https://img.alicdn.com/imgextra/i3/378884658/O1CN01vQK4g81kHPSmJ1KTe_!!378884658.jpg",
	// 	"sex": "woman",
	// 	"stype": "shirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"yellow": "https://img.alicdn.com/imgextra/i3/378884658/O1CN01WLCxDS1kHPSxZgfAX_!!378884658.jpg",
	// 		"purple": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01aVv0pK1kHPSr2XHad_!!378884658.jpg",
	// 		"red": "https://img.alicdn.com/imgextra/i3/378884658/O1CN01mzvmZA1kHPSpZ2LTF_!!378884658.jpg"
	// 	},
	// 	"sell_price": 45,
	// 	"stock_quantity": 75,
	// 	"stock": {
	// 		"yellow": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"purple": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"red": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 2,
	// 	"title": "chic网红小西装外套女韩版宽松2020新款春秋季英伦风黑色休闲西服",
	// 	"img_url":"https://img.alicdn.com/imgextra/i3/378884658/O1CN01x5sctm1kHPUPqJJ23_!!378884658.png",
	// 	"sex": "woman",
	// 	"stype": "overcoat",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"white": "https://gd4.alicdn.com/imgextra/i4/378884658/O1CN01Dpz0Ew1kHPQlgHv1l_!!378884658.jpg",
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01Sr0XI31kHPSfysE0z_!!378884658.jpg"
	// 	},
	// 	"sell_price": 139,
	// 	"stock_quantity": 169,
	// 	"stock": {
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 3,
	// 	"title": "灯芯绒半身短裙女秋冬季2020新款小个子复古a字裙高腰显瘦包臀裙",
	// 	"img_url":"https://gd3.alicdn.com/imgextra/i3/378884658/O1CN01tCuLUL1kHPUk2GfwR_!!378884658-0-lubanu-s.jpg",
	// 	"sex": "woman",
	// 	"stype": "skirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"black": "https://gd2.alicdn.com/imgextra/i1/378884658/O1CN01kO5rT01kHPUk2HoUt_!!378884658.jpg_400x400.jpg",
	// 		"apricot": "https://gd3.alicdn.com/imgextra/i3/378884658/O1CN01QfNdpp1kHPUrshMgS_!!378884658.jpg_400x400.jpg"
	// 	},
	// 	"sell_price":59 ,
	// 	"stock_quantity":89 ,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"apricot": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 4,
	// 	"title": "金丝绒百褶半身裙女中长款高腰秋冬季2020年新款a字长裙",
	// 	"img_url":"https://img.alicdn.com/imgextra/i4/378884658/O1CN01iatGgu1kHPUdBBEd9_!!378884658.jpg",
	// 	"sex": "woman",
	// 	"stype": "skirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"black": "https://img.alicdn.com/imgextra/i3/378884658/O1CN01rJKin81kHPUdzT1kH_!!378884658.jpg",
	// 		"white": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01iatGgu1kHPUdBBEd9_!!378884658.jpg",
	// 	},
	// 	"sell_price":89 ,
	// 	"stock_quantity": 59,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 5,
	// 	"title": "白色衬衫女长袖设计感小众复古港味新款秋季2020年短款方领上衣",
	// 	"img_url":"https://gd1.alicdn.com/imgextra/i1/378884658/O1CN01h5BYeU1kHPUXaQ4Qz_!!378884658-0-lubanu-s.jpg_400x400.jpg",
	// 	"sex": "woman",
	// 	"stype": "shirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"white": "https://gd1.alicdn.com/imgextra/i1/378884658/O1CN01MHi8OW1kHPUSgNAtb_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 		"black": "https://img.alicdn.com/imgextra/i1/378884658/O1CN011lGngy1kHPUUzoLZo_!!378884658.jpg"
	// 	},
	// 	"sell_price":99 ,
	// 	"stock_quantity": 59,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 6,
	// 	"title": "针织打底衫女长袖t恤春秋季2020年新款修身白色短款上衣",
	// 	"img_url":"https://img.alicdn.com/imgextra/i3/378884658/O1CN01JgKGnm1kHPUWEqQjs_!!378884658.jpg",
	// 	"sex": "woman",
	// 	"stype": "sweater",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"gray": "https://img.alicdn.com/imgextra/i3/378884658/O1CN01JgKGnm1kHPUWEqQjs_!!378884658.jpg",
	// 		"black": "https://img.alicdn.com/imgextra/i1/378884658/O1CN018Jmj1d1kHPUQJXCPE_!!378884658.jpg",
	// 		"tan": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01TRZZti1kHPUTS6ryT_!!378884658.jpg"
	// 	},
	// 	"sell_price": 129,
	// 	"stock_quantity": 89,
	// 	"stock": {
	// 		"gray": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"tan": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 7,
	// 	"title": "老爹牛仔裤女宽松高腰显瘦冬季2020年新款黑色加绒九分裤",
	// 	"img_url":"https://img.alicdn.com/imgextra/i2/3841818319/O1CN0118LVEo2BK9WjGUyTA_!!3841818319.jpg_60x60q90.jpg",
	// 	"sex": "woman",
	// 	"stype": "pants",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"blue": "https://img.alicdn.com/imgextra/i2/3841818319/O1CN0118LVEo2BK9WjGUyTA_!!3841818319.jpg_60x60q90.jpg"
	// 	},
	// 	"sell_price": 128,
	// 	"stock_quantity":98 ,
	// 	"stock": {
	// 		"blue": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 8,
	// 	"title": "垂感风衣外套女秋2020年新款英伦风中长款小个子韩版宽松港风大衣",
	// 	"img_url":"https://img.alicdn.com/imgextra/i4/4085693016/O1CN01Qn4lGW1Y9NARUKRDw_!!0-item_pic.jpg_430x430q90.jpg",
	// 	"sex": "woman",
	// 	"stype": "windbreak",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"blanchedalomnd": "https://img.alicdn.com/imgextra/i4/4085693016/O1CN01Qn4lGW1Y9NARUKRDw_!!0-item_pic.jpg_430x430q90.jpg"
	// 	},
	// 	"sell_price": 139,
	// 	"stock_quantity":249 ,
	// 	"stock": {
	// 		"blanchedalomnd": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 9,
	// 	"title": "连帽卫衣外套女宽松韩版春秋季2020年新款薄款学生百搭开衫上衣",
	// 	"img_url":"https://img.alicdn.com/imgextra/i2/378884658/O1CN01Owhtza1kHPV75bs01_!!378884658.jpg",
	// 	"sex": "woman",
	// 	"stype": "overcoat",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"white": "https://gd2.alicdn.com/imgextra/i2/378884658/O1CN014BLkkO1kHPUfu7JXt_!!378884658.jpg_50x50.jpg_.webp",
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01Owhtza1kHPV75bs01_!!378884658.jpg",
	// 		"gray": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01ZdUZuK1kHPUi0Byim_!!378884658.jpg"
	// 	},
	// 	"sell_price": 79,
	// 	"stock_quantity":139 ,
	// 	"stock": {
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"gray": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 10,
	// 	"title": "复古毛衣女宽松套头外穿秋冬季2020年新款慵懒风百搭上衣",
	// 	"img_url":"https://gd1.alicdn.com/imgextra/i1/378884658/O1CN010tsM811kHPUtGL9kJ_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "sweater",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"purple": "https://gd1.alicdn.com/imgextra/i1/378884658/O1CN01a826Xs1kHPUmCQy5t_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 		"lightskyblue": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01ZHjeZ31kHPUnCuIed_!!378884658.jpg",
	// 		"goldenrod": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01aq1mIy1kHPUmCQdSd_!!378884658.jpg"
	// 	},
	// 	"sell_price":119 ,
	// 	"stock_quantity": 89,
	// 	"stock": {
	// 		"purple": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"lightskyblue": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"goldenrod": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 11,
	// 	"title": "风衣外套女中长款2020年秋季新款韩版宽松长袖小个子大衣",
	// 	"img_url":"https://gd3.alicdn.com/imgextra/i2/378884658/O1CN01dF98aI1kHPUm9LIgc_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "windbreak",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"khaki": "https://gd3.alicdn.com/imgextra/i3/378884658/O1CN01CsgEhx1kHPUqgPGoR_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01l2OPsh1kHPUkSGm1l_!!378884658.jpg",
	// 		"white": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01XvVgN51kHPUkSFu3R_!!378884658.jpg"
	// 	},
	// 	"sell_price": 228,
	// 	"stock_quantity":129 ,
	// 	"stock": {
	// 		"khaki": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 12,
	// 	"title": "麻花毛衣女宽松外穿秋冬2020年新款韩版学生复古开衫外套",
	// 	"img_url":"https://gd3.alicdn.com/imgextra/i3/378884658/O1CN01YPZjfU1kHPVABP97R_!!378884658.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "sweater",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"purple": "https://img.alicdn.com/imgextra/i3/378884658/O1CN01babJyI1kHPV1KkVzj_!!378884658.jpg",
	// 		"white": "https://img.alicdn.com/imgextra/i1/378884658/O1CN01bBRzzc1kHPV3VVSrc_!!378884658.jpg",
	// 	},
	// 	"sell_price": 128,
	// 	"stock_quantity": 98,
	// 	"stock": {
	// 		"purple": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 13,
	// 	"title": "v领毛衣开衫外套女秋冬外穿2020年新款复古麻花短款上衣",
	// 	"img_url":"https://gd2.alicdn.com/imgextra/i2/378884658/O1CN01qpiw9n1kHPVrOw7mT_!!378884658.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "sweater",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"red": "https://gd4.alicdn.com/imgextra/i4/378884658/O1CN01bJ2aGh1kHPVBr4Xec_!!378884658.jpg_50x50.jpg_.webp",
	// 		"white": "https://img.alicdn.com/imgextra/i1/378884658/O1CN014sSgdb1kHPVEK0k32_!!378884658.jpg"
	// 	},
	// 	"sell_price":149 ,
	// 	"stock_quantity":119 ,
	// 	"stock": {
	// 		"red": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 14,
	// 	"title": "棉服马甲外套女外穿韩版秋冬季2020年新款百搭小个子加绒加厚马夹",
	// 	"img_url":"https://gd3.alicdn.com/imgextra/i4/378884658/O1CN01OzoYYa1kHPVCtls4H_!!378884658.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "vest",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"beige": "https://gd2.alicdn.com/imgextra/i2/378884658/O1CN01GFGQdC1kHPV7hDyRL_!!378884658.jpg_50x50.jpg_.webp",
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01k5x7xJ1kHPVAFA1Dm_!!378884658.jpg"
	// 	},
	// 	"sell_price": 99,
	// 	"stock_quantity": 169,
	// 	"stock": {
	// 		"beige": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 15,
	// 	"title": "a字短裙女高腰秋冬2020年新款小个子一步包臀半身裙短款",
	// 	"img_url":"https://img.alicdn.com/imgextra/i2/378884658/O1CN01qZPgxK1kHPVKmcDRn_!!378884658.jpg",
	// 	"sex": "woman",
	// 	"stype": "skirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"beige": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01GHVXym1kHPV7Jk5Gk_!!378884658.jpg",
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01ildBa11kHPVJx4kcd_!!378884658.jpg",
	// 	},
	// 	"sell_price": 49,
	// 	"stock_quantity":79 ,
	// 	"stock": {
	// 		"beige": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 16,
	// 	"title": "加绒派克服女中长款收腰秋冬2020年新款韩版宽松复古港风棉衣外套",
	// 	"img_url":"https://gd3.alicdn.com/imgextra/i2/378884658/O1CN01Afy4k41kHPVUOGpSb_!!378884658.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "downjacket",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"beige": "https://gd4.alicdn.com/imgextra/i4/378884658/O1CN015WrrIB1kHPVQmL16p_!!378884658.jpg_50x50.jpg_.webp",
	// 		"green": "https://img.alicdn.com/imgextra/i1/378884658/O1CN01hYM7uG1kHPVVFQOZU_!!378884658.jpg",
	// 		"black": "https://img.alicdn.com/imgextra/i3/378884658/O1CN010IsIq01kHPVTlD1Iv_!!378884658.jpg"
	// 	},
	// 	"sell_price": 158,
	// 	"stock_quantity": 228,
	// 	"stock": {
	// 		"beige": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"green": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 17,
	// 	"title": "收腰棉服外套女冬季加厚2020年新款韩版宽松小个子白鸭绒菱格棉衣",
	// 	"img_url":"https://gd2.alicdn.com/imgextra/i3/378884658/O1CN01bLj8KD1kHPVNQZ8yH_!!378884658.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "downjacket",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"white": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01Zc342L1kHPVOW6BQ3_!!378884658.jpg",
	// 		"black": "https://img.alicdn.com/imgextra/i4/378884658/O1CN01Raheto1kHPVK7esWd_!!378884658.jpg"
	// 	},
	// 	"sell_price":189 ,
	// 	"stock_quantity":329 ,
	// 	"stock": {
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 18,
	// 	"title": "垂感冰丝阔腿裤女高腰宽松夏季薄款裤子直筒休闲黑色拖地九分裤",
	// 	"img_url":"https://gd1.alicdn.com/imgextra/i1/378884658/O1CN01bRYR651kHPP33Sihd_!!378884658.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "skirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"beige": "https://gd4.alicdn.com/imgextra/i4/378884658/O1CN01qq5bp91kHPOveugtD_!!378884658.jpg_50x50.jpg_.webp",
	// 		"gray": "https://img.alicdn.com/imgextra/i3/378884658/TB2Mu5zk98YBeNkSnb4XXaevFXa_!!378884658.jpg",
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/TB2Kd.utmBYBeNjy0FeXXbnmFXa_!!378884658.jpg"
	// 	},
	// 	"sell_price":99 ,
	// 	"stock_quantity":69 ,
	// 	"stock": {
	// 		"beige": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"gray": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 19,
	// 	"title": "t恤半身裙套装女两件套夏季2020年新款开叉复古格子短裙",
	// 	"img_url":"https://gd2.alicdn.com/imgextra/i4/378884658/O1CN01KupqXw1kHPTaofSaB_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "sweater",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"orange": "https://img.alicdn.com/imgextra/i3/378884658/O1CN010DwYfp1kHPTYjUhvo_!!378884658.jpg",
	// 		"blue": "https://img.alicdn.com/imgextra/i1/378884658/O1CN01lwDWX21kHPTWLNj47_!!378884658.jpg"
	// 	},
	// 	"sell_price": 39,
	// 	"stock_quantity": 79,
	// 	"stock": {
	// 		"orange": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"blue": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 20,
	// 	"title": "衬衫女设计感小众夏季短袖新款2020年复古方领泡泡袖上衣",
	// 	"img_url":"https://gd4.alicdn.com/imgextra/i3/378884658/O1CN01jDoEV91kHPTtuuW2S_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "shirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"yellow": "https://gd4.alicdn.com/imgextra/i4/378884658/O1CN01CQmh8n1kHPTnIoP0N_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 		"white": "https://img.alicdn.com/imgextra/i4/378884658/O1CN015whkjO1kHPTsqpdKT_!!378884658.jpg",
	// 	},
	// 	"sell_price": 99,
	// 	"stock_quantity": 59,
	// 	"stock": {
	// 		"yellow": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 21,
	// 	"title": "五分短裤女宽松高腰直筒港味夏季薄款2020新款潮ins中裤",
	// 	"img_url":"https://gd2.alicdn.com/imgextra/i3/378884658/O1CN01e9hTPe1kHPU78BcDM_!!378884658-0-lubanu-s.jpg_50x50.jpg_.webp",
	// 	"sex": "woman",
	// 	"stype": "pants",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"black": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01ZM2byA1kHPU78JwML_!!378884658.jpg",
	// 		"white": "https://img.alicdn.com/imgextra/i2/378884658/O1CN01fLliG41kHPUEfDnYY_!!378884658.jpg",
	// 	},
	// 	"sell_price": 128,
	// 	"stock_quantity": 299,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 22,
	// 	"title": "莫兰迪色系460g重磅全棉加绒厚实纯色卫衣宽松套头长袖基础男女款",
	// 	"img_url":"https://img.alicdn.com/imgextra/i1/92688455/O1CN01OZgW5Y2CKROY08V8d_!!0-item_pic.jpg_60x60q90.jpg",
	// 	"sex": "man",
	// 	"stype": "shirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"gray": "https://img.alicdn.com/imgextra/i1/92688455/O1CN01OZgW5Y2CKROY08V8d_!!0-item_pic.jpg_60x60q90.jpg"
	// 	},
	// 	"sell_price": 149,
	// 	"stock_quantity": 299,
	// 	"stock": {
	// 		"gray": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 23,
	// 	"title": "270g重磅纯棉圆领长袖T恤男休闲多色 落肩活力拼色运动厚实男款",
	// 	"img_url":"https://img.alicdn.com/imgextra/i1/676606897/O1CN01UDhXaC20osKDx1N06_!!0-item_pic.jpg_60x60q90.jpg",
	// 	"sex": "man",
	// 	"stype": "shirt",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"black": "https://img.alicdn.com/imgextra/i1/676606897/O1CN01UDhXaC20osKDx1N06_!!0-item_pic.jpg_60x60q90.jpg",
	// 		"white": "https://img.alicdn.com/imgextra/i3/676606897/O1CN014zKuB120osJ88EjuT_!!676606897.jpg_60x60q90.jpg"
	// 	},
	// 	"sell_price": 99,
	// 	"stock_quantity": 119,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"white": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 24,
	// 	"title": "冬季灰色卫裤男宽松男裤加绒加厚运动裤男士裤子抽绳束脚裤休闲裤",
	// 	"img_url":"https://img.alicdn.com/imgextra/i1/1757689593/O1CN01YqrwXE2Kje50Zyx6K_!!1757689593-0-lubanu-s.jpg_60x60q90.jpg",
	// 	"sex": "man",
	// 	"stype": "pants",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"black": "https://img.alicdn.com/imgextra/i3/1757689593/O1CN01XOOIDX2Kje6TH89kj_!!1757689593.jpg_60x60q90.jpg",
	// 		"gray": "https://img.alicdn.com/imgextra/i1/1757689593/O1CN01YqrwXE2Kje50Zyx6K_!!1757689593-0-lubanu-s.jpg_60x60q90.jpg"
	// 	},
	// 	"sell_price": 104,
	// 	"stock_quantity": 110,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"gray": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// },{
	// 	"id": 25,
	// 	"title": "韩版两面穿羊羔毛外套宽松学生青少年情侣男女加厚棉衣潮",
	// 	"img_url": "https://img.alicdn.com/imgextra/i1/3711661242/O1CN01BTulzx1L2sYRA6DlA_!!0-item_pic.jpg_60x60q90.jpg",
	// 	"sex": "man",
	// 	"stype": "overcoat",
	// 	"min_size": 160,
	// 	"max_size": 180,
	// 	"color": {
	// 		"black": "https://img.alicdn.com/imgextra/i1/3711661242/O1CN01BTulzx1L2sYRA6DlA_!!0-item_pic.jpg_60x60q90.jpg",
	// 		"green": "https://img.alicdn.com/imgextra/i1/3711661242/O1CN01nKwN4m1L2sYQI9mbc_!!3711661242.jpg_60x60q90.jpg"
	// 	},
	// 	"sell_price": 139,
	// 	"stock_quantity": 185,
	// 	"stock": {
	// 		"black": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100},
	// 		"green": {"s160": 20, "s165": 20, "s170": 20, "s175": 20, "s180": 20, "amount": 100}
	// 	}
	// }])
	
	// console.log('res', res);
	
	// 返回数据给客户端
	// return event
};
