'use strict';

const db = uniCloud.database();
const collection = db.collection('TY_CLOTHES');
const dbCmd = db.command;

exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await collection
			.where({
				stype: event.searchValue, // 需求匹配
				sellInfo: {
					sex: event.phyData.sex,  // 性别匹配
					height: dbCmd.gt(parseInt(event.phyData.height) - 4).and(dbCmd.lt(parseInt(event.phyData.height) + 4)),  // 身高匹配
					weight: dbCmd.gt(parseInt(event.phyData.weight) - 5).and(dbCmd.lt(parseInt(event.phyData.weight) + 5)),  // 体重匹配
					age: dbCmd.gt(parseInt(event.phyData.age) - 3).and(dbCmd.lt(parseInt(event.phyData.age) + 3)),  // 年龄匹配
					skinColor: event.faceData.skipColor,  // 肤色匹配
					faceShape: event.faceData.faceShape, // 脸型匹配
					// hobbies: event.hobbiesData.hobbies // 兴趣爱好匹配
					eyeShape: event.faceData.eyeShape,  // 眼型匹配
					nature: event.otherData.nature  // 性格匹配
				}
			})
			.skip(parseInt(event.pageindex - 1) * 10)
			.limit(10)
			.get();
	
	//返回数据给客户端
	return res;
};
