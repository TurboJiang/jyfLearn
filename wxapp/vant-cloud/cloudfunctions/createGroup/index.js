// 云函数入口文件
const cloud = require('wx-server-sdk')
// 当前云环境id
const env = 'jiangyefang-ee4833'

cloud.init()

// 获取数据库句柄  数据库指针 指向数据库的某一个表
const db = cloud.database({ env })//连接数据库 指明当前云环境




// 云函数入口函数 async es7 与.then异曲同工之妙
exports.main = async (event, context) => {
  // 别的地方调用了此createGroup函数且传了一个参userInfo
  const userInfo = event.userInfo
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      delete: false,
      updateTime: new Date()
    }
  })
}
