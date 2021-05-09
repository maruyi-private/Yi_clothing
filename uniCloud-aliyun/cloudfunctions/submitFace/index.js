'use strict';

const db = uniCloud.database()
const collection = db.collection('TY_USERINFO')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	await collection.where({ suserid: event.suserid })
			.update({ faceData: event.faceData });
	return event;
};
