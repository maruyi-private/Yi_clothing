'use strict';

const db = uniCloud.database()
const collection = db.collection('TY_USERINFO')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const res = await collection.where({ suserid: event.suserid }).get();
	
	if(res.data != null && res.data.length == 0) {
		await collection.add(event);
		return event;
	} else {
		await collection.where({ suserid: event.suserid })
				.update({ phyData: event.phyData });
		return event;
	}
};
