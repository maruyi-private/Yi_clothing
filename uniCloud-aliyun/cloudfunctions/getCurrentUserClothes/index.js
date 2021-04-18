'use strict';

const db = uniCloud.database();
const collection = db.collection('TY_CLOTHES');
const dbCmd = db.command;

exports.main = async (event, context) => {
	//event为客户端上传的参数
	const res = await collection
			.where({
				stype: event.needType, // 需求匹配
				sex: event.sex,
				min_size: dbCmd.lt(event.size),
				max_size: dbCmd.gt(event.size),
				sellInfo: {
					height: dbCmd.gt(event.height - 4).and(dbCmd.lt(event.height + 4)),  // 身高匹配
					weight: dbCmd.gt(event.weight - 5).and(dbCmd.lt(event.weight + 5)),  // 体重匹配
					age: dbCmd.gt(event.age - 3).and(dbCmd.lt(event.age + 3)),  // 年龄匹配
					skin: dbCmd.gt(event.skipColor - 5).and(dbCmd.lt(event.size + 5)),  // 肤色匹配
					faceShape: dbCmd.inc(event.faceShape), // 脸型匹配
					hobbies: dbCmd.inc(event.hobbies) // 兴趣爱好匹配
				}
			})
			.skip(parseInt(event.pageindex - 1) * 10)
			.limit(10)
			.get();
	
	//返回数据给客户端
	return res;
};
