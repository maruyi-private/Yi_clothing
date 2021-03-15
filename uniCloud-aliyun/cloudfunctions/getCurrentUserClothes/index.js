'use strict';

const db = uniCloud.database();
const collection = db.collection('TY_CLOTHES');

exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await collection
			.skip(parseInt(event.pageindex - 1) * 10)
			.limit(10)
			.get();
	
	//返回数据给客户端
	return res;
};
