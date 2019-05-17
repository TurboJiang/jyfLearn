// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'jiangyefang-ee4833'
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  // event.userInfo有内容是因为此云函数在别的地方被调用了
  const userInfo = event.userInfo

  // 查询有无该用户的openid await用于等待异步完成 只能用于async函数中
  const checkUser = await db.collection('user').where({
    openId: userInfo.openId
  })
    .get()//找到用户get一下
  // 同步数据 如果此人存在
  if (checkUser.data.length > 0) {
    // doc()查询字段
    await db.cloud.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  } else {
    const insertResult = await db.collection('user').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.userInfo.openId,//加密过的 无法直接打印出来看 openId:userInfo.openId
        createTime: new Date()
      }
    })
  }
}