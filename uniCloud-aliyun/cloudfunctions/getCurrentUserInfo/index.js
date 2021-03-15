'use strict';

const uniID = require('uni-id')
exports.main = async function(event,context) {
  const res = await uniID.getUserInfoByToken(event.uniIdToken)
  return res;
}
