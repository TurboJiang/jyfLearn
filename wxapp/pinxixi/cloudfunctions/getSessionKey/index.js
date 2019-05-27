// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const crypto = require('crypto')

cloud.init()
const getSessionKey = function (code) {
  return new Promise((resolve, reject) => {
    // 请求配置 如何将请求发出去
    request({
      methods: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session?',
      // queryString 查询参数
      qs: {
        appid: 'wxdb67ca7fd3d5d369',
        secret: 'bd4f008146ccd8135bfc422f24820c01',
        js_code: code,
        grant_type: 'authorization_code'
      },
      // 响应体(body) 转为 json格式的 res是包含所有响应的对象 body是res下的一个属性
      json: true
    }, (err, res, body) => {
      if (err) {
        reject(err)
      }
      resolve(body)
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获代码错误
  try {
    const { code } = event;
    const weixinRes = await getSessionKey(code)
    const { openid, session_key } = weixinRes
    // 1.创建一个 哈希加密算法
    // 2.对谁加密
    // 3. 以什么格式输出 hex 16进制
    const skey = crypto.createHash('sha1')
    .update(session_key,'utf-8')
    .digest('hex')
    // 保存在服务端的一个信息
    // 返回session_key
    return {
      skey
    }
  } catch (error) {
    return {
      error
    }
  }
}