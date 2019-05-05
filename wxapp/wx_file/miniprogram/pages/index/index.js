// 连接数据库
const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  data: {
    userList: []
  },
  getUserInfo: function (e) {
    console.log(e);

    // 获取用户的_openid 但是其有安全问题 这是前端无法获取 到云端(node环境)去获取_openid安全
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        // console.log(res);
        userInfo
          .where({
            _openid: res.result._openid
          }).count()
          .then(res => {
            console.log(res);
            if (res.total == 0) {
              // 新用户
              userInfo.add({//增加一条记录
                data: e.detail.userInfo//e.detail申请数据
              }).then(res=>{
                wx.navigateTo({
                  url:'../add/add'
                })
              })
            }else{
              console.log('已经存在了');
              wx.navigateTo({
                url:'../add/add'
              })
            }
          })
      }
    })

    // 把用户存到数据库中 搞定database 用户表 核心表
    // table === collection
    // userInfo.add({//增加一条记录
    //   data: e.detail.userInfo//e.detail申请数据
    // })
  },
  onLoad: function () {
    userInfo
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          userList: res.data
        })
      })
  }
})
