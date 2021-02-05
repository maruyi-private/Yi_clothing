'use strict';

const db = uniCloud.database();
// 获取 `TY_LUNBOIMG` 集合的引用
const collection = db.collection('TY_LUNBOIMG');

exports.main = async (event, context) => {
	//event为客户端上传的参数
	// const res = await collection.add([{
	// 	"index": 0,
	// 	"img": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-596c0fc5-f76b-48f7-8dff-964fcecd0418/33bd48ca-b864-475c-8cab-54a3f621351e.jpg"
	// },{
	// 	"index": 1,
	// 	"img": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-596c0fc5-f76b-48f7-8dff-964fcecd0418/d2c26d57-59a2-4f6b-b1c4-001dab622896.png"
	// },{
	// 	"index": 2,
	// 	"img": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-596c0fc5-f76b-48f7-8dff-964fcecd0418/f448884d-3d34-4257-a0f7-c3251dc9dcb6.jpg"
	// },{
	// 	"index": 3,
	// 	"img": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-596c0fc5-f76b-48f7-8dff-964fcecd0418/73e2e5d3-1193-4918-a643-1bbb43791b88.jpg"
	// }])
	const res = await collection.get()
	
	//返回数据给客户端
	return res
};
