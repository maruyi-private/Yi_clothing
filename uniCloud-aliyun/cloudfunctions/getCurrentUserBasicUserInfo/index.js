'use strict';

const db = uniCloud.database()
const collection = db.collection('TY_USERINFO')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await collection.where({ suserid: event.suserid }).get();
	
	//返回数据给客户端
	return res;
};
